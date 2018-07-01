const userInfoService = require('./../services/user-info')
const userCode = require('./../codes/user')

module.exports = {

  /**
   * 登录操作
   * @param  {obejct} ctx 上下文对象
   */
  async signIn( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }

    let userResult = await userInfoService.signIn( formData )

    if ( userResult ) {
      if ( formData.userName === userResult.name ) {
        result.success = true
      } else {
        result.message = userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR
        result.code = 'FAIL_USER_NAME_OR_PASSWORD_ERROR'
      }
    } else {
      result.code = 'FAIL_USER_NO_EXIST',
      result.message = userCode.FAIL_USER_NO_EXIST
    }

    if ( formData.source === 'form' && result.success === true ) {

      // 存储session
      let session = ctx.session
      session.isLogin = true
      session.userName = userResult.name
      session.userId = userResult.id;
      // 存储cookie
      ctx.cookies.set(
        'userinfo',
        JSON.stringify(userResult),
        {
          httpOnly: false,  // 是否只用于http请求中获取
          overwrite: false  // 是否允许重写
        }
      )

      ctx.redirect('/')
    } else {
      ctx.body = result
    }
  },

  /**
   * 退出登录
   * @param  {obejct} ctx 上下文对象
   */

   async signOut( ctx ){
    // 删除session
    let session = ctx.session
    session.isLogin = false
    delete session.userName
    delete session.userId

    // 删除cookie
    ctx.cookies.set(
      'userinfo',
      null,
      {
        maxAge: 0,
        signed:false
      }
    )
    ctx.redirect('/login');
   },

  /**
   * 注册操作
   * @param   {obejct} ctx 上下文对象
   */
  async signUp( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let validateResult = userInfoService.validatorSignUp( formData )

    if ( validateResult.success === false ) {
      result = validateResult
      ctx.body = result
      return
    }

    let existOne  = await userInfoService.getExistOne(formData)

    if ( existOne  ) {
      if ( existOne .name === formData.userName ) {
        result.message = userCode.FAIL_USER_NAME_IS_EXIST
        ctx.body = result
        return
      }
      if ( existOne .email === formData.email ) {
        result.message = userCode.FAIL_EMAIL_IS_EXIST
        ctx.body = result
        return
      }
    }

    let createData = {
      email: formData.email,
      password: formData.password,
      name: formData.userName,
      create_time: new Date().getTime(),
      level: 1,
    }

    let userResult = await userInfoService.create(createData)

    if ( userResult && userResult.insertId * 1 > 0) {
      result.success = true
      
      // 存储完毕后，重新查询一下id，将返回值，放在session和cookie中，防止跳转页面消失
      let userOne = await userInfoService.getExistOne(formData)

      if(userOne){
        // 存储session
        let session = ctx.session
        session.isLogin = true
        session.userName = userOne.name
        session.userId = userOne.id;
        // 存储cookie
        ctx.cookies.set(
          'userinfo',
          JSON.stringify(userOne),
          {
            httpOnly: false,  // 是否只用于http请求中获取
            overwrite: false  // 是否允许重写
          }
        )
      }
      
    } else {
      result.message = userCode.ERROR_SYS
    }

    ctx.body = result
  },

  /**
   * 获取用户信息
   * @param    {obejct} ctx 上下文对象
   */
  async getLoginUserInfo( ctx ) {
    let session = ctx.session
    let isLogin = session.isLogin
    let userName = session.userName

    console.log( 'session=', session )

    let result = {
      success: false,
      message: '',
      data: null,
    }
    if ( isLogin === true && userName ) {
      let userInfo = await userInfoService.getUserInfoByUserName( userName )
      if ( userInfo ) {
        result.data = userInfo
        result.success = true
      } else {
        result.message = userCode.FAIL_USER_NO_LOGIN
      }
    } else {
      // TODO
    }

    ctx.body = result
  },

  /**
   * 校验用户是否登录
   * @param  {obejct} ctx 上下文对象
   */
  validateLogin( ctx ) {
    let result = {
      success: false,
      message: userCode.FAIL_USER_NO_LOGIN,
      data: null,
      code: 'FAIL_USER_NO_LOGIN',
    } 
    let session = ctx.session
    if( session && session.isLogin === true  ) {
      result.success = true
      result.message = ''
      result.code = ''
    }
    return result
  }


}
