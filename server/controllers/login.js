module.exports = {

  async indexPage ( ctx ) {
    const title = 'login page'
    await ctx.render('login', {
      title,
    })
  },

}