'use strict'
const Hapi = require('hapi')
const config = require('./config')
const helloRoutes = require('./routes/hello')
const plugins = require('./plugins')

const server = Hapi.server({
  host: config.host,
  port: config.port
})

server.route([
  ...helloRoutes
])

const init = async () => {
  await server.register(plugins)
  await server.start()
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
