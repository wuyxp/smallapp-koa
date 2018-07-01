/**
 * 整合所有子路由
 */

const router = require('koa-router')()

const home = require('./home')
const api = require('./api')
const login = require('./login')
const work = require('./work')
const error = require('./error')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/login', login.routes(), login.allowedMethods())
router.use('/work', work.routes(), work.allowedMethods())
router.use('/error', error.routes(), error.allowedMethods())

module.exports = router


