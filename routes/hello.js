module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      return 'Hello Hapi!'
    },
    config: {
      tags: ['api', 'test'],
      description: '测试连接'
    }
  },
  {
    method: 'GET',
    path: '/{name}',
    handler: async (request, h) => {
      const { name } = request.params
      return `Hello ${encodeURIComponent(name)}!`
    },
    config: {
      tags: ['api', 'test'],
      description: '测试动态路由'
    }
  }
]
