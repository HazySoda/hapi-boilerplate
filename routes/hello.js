module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      return 'Hello Hapi!'
    }
  },
  {
    method: 'GET',
    path: '/{name}',
    handler: async (request, h) => {
      const { name } = request.params
      return `Hello ${encodeURIComponent(name)}!`
    }
  }
]
