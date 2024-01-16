const { isTokenValid } = require('../utils')
const CustomAPIErrors = require('../errors')
const authenticateUser = (req, res, next) => {
  const token = req.signedCookies.token
  if (!token) {
    throw new CustomAPIErrors.UnauthenticatedError('Authentication Failed')
  }
  try {
    const { name, userId, role } = isTokenValid(token)
    req.user = { name, userId, role }
    next()
  } catch (error) {
    throw new CustomAPIErrors.UnauthenticatedError('Authentication Error')
  }
}

module.exports = { authenticateUser }
