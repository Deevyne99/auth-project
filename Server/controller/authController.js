const User = require('../model/User')
const { StatusCodes } = require('http-status-codes')

const registerUser = async (req, res) => {
  const { name, email, password } = req.body
  const user = await User.create({ name, email, password })
  res.status(StatusCodes.CREATED).json({ successful: true, user })
}

const loginUser = async (req, res) => {
  res.send('Login user')
}

module.exports = { registerUser, loginUser }
