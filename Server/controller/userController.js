const User = require('../model/User')
const CustomAPIErrors = require('../errors')
const { StatusCodes } = require('http-status-codes')
const { checkPermission } = require('../utils')

const getAllUsers = async (req, res) => {
  const users = await User.find({})
  res
    .status(StatusCodes.OK)
    .json({ successful: true, count: users.length, users })
}

const getSingleUser = async (req, res) => {
  const { id: userId } = req.params
  const user = await User.findOne({ _id: userId }).select('-password')
  if (!user) {
    throw new CustomAPIErrors.BadRequestError(`No user with the id ${userId}`)
  }
  checkPermission(req.user, user._id)
  res.status(StatusCodes.OK).json({ success: true, user })
}

const showMe = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user })
}

const updatePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body
  if (!oldPassword || !newPassword) {
    throw new CustomAPIErrors.BadRequestError('Please provide values')
  }
  const user = await User.findOne({ _id: req.user.userId })

  const isPasswordMatch = await user.comparePassword(oldPassword)

  if (!isPasswordMatch) {
    throw new CustomAPIErrors.BadRequestError('Invalid Credentials')
  }
  user.password = newPassword
  await user.save()
  res
    .status(StatusCodes.OK)
    .json({ success: true, msg: 'Password change was successful' })
}

module.exports = { getAllUsers, getSingleUser, showMe, updatePassword }
