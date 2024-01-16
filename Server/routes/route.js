const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../middleware/authenticatUser')
const {
  registerUser,
  loginUser,
  logoutUser,
} = require('../controller/authController')

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(authenticateUser, logoutUser)

module.exports = router
