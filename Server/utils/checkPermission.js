const CustomAPIError = require('../errors')

const checkPermission = (requestUser, resourceUserId) => {
  console.log(requestUser)
  console.log(resourceUserId)
  if (requestUser.role === 'admin') return
  if (requestUser.userId === resourceUserId.toString()) return
  throw new CustomAPIError.UnauthorizedError(
    'Not Authorized to access this Route'
  )
}

module.exports = checkPermission
