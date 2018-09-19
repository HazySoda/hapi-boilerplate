'use strict'
const Hapi = require('hapi')
const config = require('./config')
const helloRoutes = require('./routes/hello')

const server = Hapi.server({
  host: config.host,
  port: config.port
})

server.route([
  ...helloRoutes
])

const init = async () => {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
