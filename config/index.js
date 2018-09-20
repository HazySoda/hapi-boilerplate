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
  port: env.SERVER_PORT,
  mysql: {
    dialect: 'mysql',
    host: env.MYSQL_HOST,
    port: env.MYSQL_PORT,
    username: env.MYSQL_USERNAME,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DB_NAME
  },
  secret: {
    JWT: env.JWT_SECRET
  }
}
