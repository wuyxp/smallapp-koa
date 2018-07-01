/**
 * 管理员用户子路由
 */

const router = require('koa-router')()
const login = require('./../controllers/login')

module.exports = router.get( '/', login.indexPage )