const inert = require('inert')
const vision = require('vision')
const hapiAuthJWT2 = require('hapi-auth-jwt2')
const pluginLaabr = require('./laabr')
const pluginHapiRouter = require('./hapi-router')
const pluginHapiSwagger = require('./hapi-swagger')
const pluginHapiPagination = require('./hapi-pagination')
const pluginHapiGood = require('./hapi-good')

module.exports = [
  inert,
  vision,
  hapiAuthJWT2,
  pluginLaabr,
  pluginHapiRouter,
  pluginHapiSwagger,
  pluginHapiPagination,
  pluginHapiGood
]
