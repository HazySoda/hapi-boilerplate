const inert = require('inert')
const vision = require('vision')
const pluginLaabr = require('./laabr')
const pluginHapiRouter = require('./hapi-router')
const pluginHapiSwagger = require('./hapi-swagger')

module.exports = [
  inert,
  vision,
  pluginLaabr,
  pluginHapiRouter,
  pluginHapiSwagger
]
