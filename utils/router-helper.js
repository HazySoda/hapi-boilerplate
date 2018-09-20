const Joi = require('joi')

const paginationDefine = {
  pageSize: Joi.number().integer().min(1).default(10).description('每页条数'),
  currentPage: Joi.number().integer().min(1).default(1).description('当前页数'),
  pagination: Joi.boolean().default(true).description('是否开启分页')
}

const jwtAuthDefine = {
  headers: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}

module.exports = {
  paginationDefine,
  jwtAuthDefine
}
