const { isTokenValid } = require('../utils')
const CustomAPIErrors = require('../errors')

const authenticateUser = (req, res, next) => {
  const token = req.signedCookies.token
  console.log(token)
  if (!token) {
    throw new CustomAPIErrors.UnauthenticatedError('Authentication Failed')
  }
  try {
    const { name, userId, role } = isTokenValid({ token })
    req.user = { name, userId, role }
    next()
  } catch (error) {
    console.log(error)
    throw new CustomAPIErrors.UnauthenticatedError('Authentication Error')
  }
}

const authorizeUser = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomAPIErrors.UnauthorizedError(
        'Not Authorized to access this route'
      )
    }
    next()
  }
}
module.exports = { authenticateUser, authorizeUser }
