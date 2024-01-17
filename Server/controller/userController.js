const User = require('../model/User')
const CustomAPIErrors = require('../errors')
const { StatusCodes } = require('http-status-codes')

const getAllUsers = async (req, res) => {
  const users = await User.find({})
  res
    .status(StatusCodes.OK)
    .json({ successful: true, count: users.length, users })
}

module.exports = { getAllUsers }
