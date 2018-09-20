const config = require('../config')

const validate = (decoded, request, h) => {
  const { userId } = decoded
  return {
    isValid: !!userId
  }
}

module.exports = server => {
  server.auth.strategy('jwt', 'jwt', {
    key: config.secret.JWT,
    validate
  })
  server.auth.default('jwt')
}
