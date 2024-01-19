const checkPermission = require('./checkPermission')
const createTokenUser = require('./createTokenUser')
const { attachCookieToResponse, createJWT, isTokenValid } = require('./jwt')

module.exports = {
  createTokenUser,
  attachCookieToResponse,
  createJWT,
  isTokenValid,
  checkPermission,
}
