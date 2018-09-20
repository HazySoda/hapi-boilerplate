const Joi = require('joi')
const JWT = require('jsonwebtoken')
const config = require('../config')

const GROUP_NAME = 'users'

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}/createJWT`,
    handler: async (request, h) => {
      const generateJWT = jwtInfo => {
        const payload = {
          userId: jwtInfo.userId,
          exp: +new Date() + (2 * 60 * 60 * 1000)
        }
        return JWT.sign(payload, config.secrty.JWT)
      }
      return generateJWT(request.payload)
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '测试 JWT 签发',
      notes: '测试 JWT 签发',
      auth: false, // 约定此接口不参与 JWT 的用户验证，会结合 hapi-auth-jwt2 来使用
      validate: {
        payload: Joi.object().keys({
          userId: Joi.number().integer().min(1).required().description('用户ID')
        })
      }
    }
  }
]
