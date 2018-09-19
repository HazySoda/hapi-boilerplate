const hapiRouter = require('hapi-router')

module.exports = {
  plugin: hapiRouter,
  options: {
    routes: './routes/**/*.js'
  }
}
