const express = require('express')
const { getAllUsers } = require('../controller/userController')
const {
  authenticateUser,
  authorizeUser,
} = require('../middleware/authenticatUser')

const router = express.Router()

router.route('/').get(authenticateUser, authorizeUser('user'), getAllUsers)

module.exports = router
