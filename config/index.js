const path = require('path')
const env2 = require('env2')

const resolve = relPath => path.join(__dirname, relPath)

if (process.env.NODE_ENV === 'production') {
  env2(resolve('../env/prod.env'))
} else {
  env2(resolve('../env/dev.env'))
}

const { env } = process

module.exports = {
  host: env.SERVER_HOST,
  port: env.SERVER_PORT
}
