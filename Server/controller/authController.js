const User = require('../model/User')
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
const { createTokenUser, attachCookieToResponse } = require('../utils')
const CustomAPIError = require('../errors')
const crypto = require('crypto')

const registerUser = async (req, res) => {
  const { name, email, password } = req.body
  const isEmailExist = await User.findOne({ email })
  if (isEmailExist) {
    throw new CustomAPIError.BadRequestError('Email Already Exist')
  }
  const isFirstUser = (await User.countDocuments({})) === 0
  const role = isFirstUser ? 'admin' : 'user'
  const verificationToken = crypto.randomBytes(40).toString('hex')
  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken,
  })

  // const tokenUser = createTokenUser(user)
  // attachCookieToResponse({ res, user: tokenUser })

  res.status(StatusCodes.CREATED).json({
    msg: 'Account created successfully',
    token: user.verificationToken,
  })
}

const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body

  const user = User.findOne({ email })
  if (!user) {
    throw new CustomAPIError.UnauthenticatedError('verification failed')
  }

  if (!user.verificationToken !== verificationToken) {
    throw new CustomAPIError.UnauthenticatedError('Verification failed')
  }

  user.isVerified = true
  user.verified = Date.now()
  user.verificationToken = ''

  await user.save()

  res.status(StatusCodes.OK).json({ msg: 'Account verified' })
}

const loginUser = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    throw new CustomAPIError.BadRequestError('Invalid Credentials')
  }
  const isPasswordMatch = await user.comparePassword(password)
  if (!isPasswordMatch) {
    throw new CustomAPIError.BadRequestError('Invalid Credentials')
  }

  if (!user.isVerified) {
    throw new CustomAPIError.UnauthenticatedError('Please verify your Email')
  }

  const tokenUser = createTokenUser(user)

  attachCookieToResponse({ res, user: tokenUser })
  res.status(StatusCodes.OK).json({ success: true, user: tokenUser })
}

const logoutUser = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.status(StatusCodes.OK).json({ success: true, msg: 'Logout Successful' })
}

module.exports = { registerUser, loginUser, logoutUser, verifyEmail }
