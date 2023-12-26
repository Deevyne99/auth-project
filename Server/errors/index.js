const BadRequestError = require('./badRequest')
const CustomAPIError = require('./customApi')
const NotFoundError = require('./notFound')
const UnauthenticatedError = require('./unauthenticated')
const UnauthorizedError = require('./unauthorized')

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  UnauthorizedError,
  NotFoundError,
  BadRequestError,
}
