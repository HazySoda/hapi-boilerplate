module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello Hapi!'
    }
  },
  {
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {
      const { name } = request.params
      return `Hello ${encodeURIComponent(name)}!`
    }
  }
]
