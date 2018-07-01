module.exports = {
  async indexPage ( ctx ) {
    // 判断是否有session
    if ( ctx.session && ctx.session.isLogin && ctx.session.userName ) {
      const title = 'home';
      await ctx.render('index', {
        title,
      })
    } else {
      // 没有登录态则跳转到错误页面
      ctx.redirect('/login')
    }
  }
}