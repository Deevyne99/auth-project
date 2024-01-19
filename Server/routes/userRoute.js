const express = require('express')
const {
  getAllUsers,
  getSingleUser,
  showMe,
  updatePassword,
} = require('../controller/userController')
const {
  authenticateUser,
  authorizeUser,
} = require('../middleware/authenticatUser')

const router = express.Router()

router.route('/').get(authenticateUser, authorizeUser('user'), getAllUsers)

router.route('/showMe').get(authenticateUser, showMe)
router.route('/updatePassword').patch(authenticateUser, updatePassword)
router.route('/:id').get(authenticateUser, getSingleUser)

module.exports = router
