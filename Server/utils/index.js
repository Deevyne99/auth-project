const createTokenUser = require('./createTokenUser')
const { attachCookieToResponse, createJWT } = require('./jwt')
attachCookieToResponse
module.exports = {
  createTokenUser,
  attachCookieToResponse,
  createJWT,
}
