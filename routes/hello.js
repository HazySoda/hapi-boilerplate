const Joi = require('joi')

module.exports = [
  {
    method: 'GET',
    path: '/',
    config: {
      tags: ['api', 'test'],
      description: '测试连接'
    },
    handler: async (request, h) => {
      return 'Hello Hapi!'
    }
  },
  {
    method: 'GET',
    path: '/{name}',
    config: {
      tags: ['api', 'test'],
      description: '测试动态路由',
      validate: {
        params: {
          name: Joi.string().required().description('name')
        }
      }
    },
    handler: async (request, h) => {
      const { name } = request.params
      return `Hello ${encodeURIComponent(name)}!`
    }
  },
  {
    method: 'POST',
    path: '/post',
    config: {
      tags: ['api', 'test'],
      description: '测试POST',
      validate: {
        payload: {
          name: Joi.string().required().description('name')
        }
      }
    },
    handler: async (request, h) => {
      const { name } = request.payload
      return `Hello ${name}!`
    }
  }
]
