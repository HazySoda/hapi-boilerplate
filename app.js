'use strict'
const Hapi = require('hapi')
const Boom = require('boom')
const config = require('./config')
const plugins = require('./plugins')
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2')

const server = Hapi.server({
  host: config.host,
  port: config.port
})

// 在开发环境下返回 Joi 校验的详细错误信息
server.rules(rules => {
  return {
    validate: {
      failAction: async (request, h, err) => {
        if (process.env.NODE_ENV === 'production') {
          throw Boom.badRequest(`Invalid request payload input`)
        } else {
          const message = `${err.name}: ${err.message}`
          console.error(message)
          throw Boom.badRequest(message)
        }
      }
    }
  }
})

const init = async () => {
  await server.register(plugins)
  pluginHapiAuthJWT2(server)
  await server.start()
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
