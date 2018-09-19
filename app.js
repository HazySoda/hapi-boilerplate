'use strict'
const Hapi = require('hapi')
const config = require('./config')
const plugins = require('./plugins')

const server = Hapi.server({
  host: config.host,
  port: config.port
})

const init = async () => {
  await server.register(plugins)
  await server.start()
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
