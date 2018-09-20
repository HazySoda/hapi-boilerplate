const pack = require('../package')
const hapiSwagger = require('hapi-swagger')

const options = {
  info: {
    title: 'API Documentation',
    version: pack.version,
    description: 'Hapi Boilerplate',
    contact: {
      name: 'Kidneyflower',
      url: 'https://github.com/KidneyFlower/hapi-boilerplate',
      email: 'wildnode@gmail.com'
    }
  },
  grouping: 'tags',
  documentationPage: process.env.NODE_ENV === 'development',
  documentationPath: '/doc'
}

module.exports = {
  plugin: hapiSwagger,
  options
}
