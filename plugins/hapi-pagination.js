const hapiPagination = require('hapi-pagination')

const options = {
  query: {
    limit: {
      name: 'pageSize',
      default: 10
    },
    page: {
      name: 'currentPage',
      default: 1
    },
    pagination: {
      default: false
    }
  },
  meta: {
    name: 'pagination',
    limit: {
      active: true
    },
    page: {
      active: true
    },
    totalCount: {
      active: true,
      name: 'total'
    },
    count: {
      active: false
    },
    pageCount: {
      active: false
    },
    self: {
      active: false
    },
    previous: {
      active: false
    },
    next: {
      active: false
    },
    first: {
      active: false
    },
    last: {
      active: false
    }
  },
  results: {
    name: 'data'
  },
  routes: {
    include: ['*'],
    exclude: []
  }
}

module.exports = {
  plugin: hapiPagination,
  options
}
