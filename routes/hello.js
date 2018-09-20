const Joi = require('joi')
const { paginationDefine, jwtAuthDefine } = require('../utils/router-helper')

module.exports = [
  {
    method: 'GET',
    path: '/',
    config: {
      tags: ['api', 'test'],
      description: '测试连接',
      notes: '测试连接',
      auth: false
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
      notes: '测试动态路由',
      auth: false,
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
    method: 'GET',
    path: '/pagination',
    config: {
      tags: ['api', 'test'],
      description: '测试分页',
      notes: '测试分页',
      validate: {
        query: {
          ...paginationDefine
        },
        ...jwtAuthDefine
      }
    },
    handler: async (request, h) => {
      const mockData = [
        {
          id: 0,
          name: '0'
        },
        {
          id: 1,
          name: '1'
        },
        {
          id: 2,
          name: '2'
        }
      ]
      return h.paginate({
        data: mockData,
        foo: 'bar'
      }, mockData.length, { key: 'data' })
    }
  },
  {
    method: 'POST',
    path: '/post',
    config: {
      tags: ['api', 'test'],
      description: '测试POST',
      notes: '测试POST',
      auth: false,
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
