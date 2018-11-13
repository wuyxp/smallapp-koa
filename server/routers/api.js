/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')
const test = require('./../controllers/test');

const routers = router
  .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
    .get('/test', test.testJSON)
  .post('/user/signIn.json', userInfoController.signIn)
  .post('/user/signUp.json', userInfoController.signUp)
  .post('/user/signOut.json', userInfoController.signOut)
 
  
module.exports = routers
