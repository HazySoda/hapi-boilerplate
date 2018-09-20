const good = require('good')

const { LOGS_DIR } = process.env

const options = {
  ops: {
    interval: 10 * 60 * 1000
  },
  reporters: {
    console: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ ops: '*' }]
      },
      {
        module: 'good-console',
        args: [
          {
            format: 'YYYY-MM-DD HH:mm:ss',
            utc: false
          }
        ]
      },
      'stdout'
    ],
    ops: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ ops: '*' }]
      },
      {
        module: 'good-squeeze',
        name: 'SafeJson'
      },
      {
        module: 'good-file',
        args: [`${LOGS_DIR}/ops.log`]
      }
    ],
    response: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ response: '*' }]
      },
      {
        module: 'good-squeeze',
        name: 'SafeJson'
      },
      {
        module: 'good-file',
        args: [`${LOGS_DIR}/response.log`]
      }
    ],
    error: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ error: '*' }]
      },
      {
        module: 'good-squeeze',
        name: 'SafeJson'
      },
      {
        module: 'good-file',
        args: [`${LOGS_DIR}/error.log`]
      }
    ]
  }
}

module.exports = {
  plugin: good,
  options
}
