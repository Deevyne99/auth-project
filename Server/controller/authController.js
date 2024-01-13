const User = require('../model/User')
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
const createTokenUser = require('../utils')
const CustomAPIError = require('../errors')

const registerUser = async (req, res) => {
  const { name, email, password } = req.body
  const isEmailExist = await User.findOne({ email })
  if (isEmailExist) {
    throw new CustomAPIError.BadRequestError('Email Already Exist')
  }
  const isFirstUser = (await User.countDocuments({})) === 0
  const role = isFirstUser ? 'admin' : 'user'
  const user = await User.create({ name, email, password, role })
  const token = jwt.sign(
    { name: user.name, userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  )
  const oneDay = 1000 * 60 * 60 * 24
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
  })
  res.status(StatusCodes.CREATED).json({ successful: true, user, token })
}

const loginUser = async (req, res) => {
  res.send('Login user')
}

module.exports = { registerUser, loginUser }
