/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/11/5 下午4:23
 */
module.exports = {
    async testJSON ( ctx ) {
        const title = 'home';
        console.log('来自访问了');
        console.dir(ctx.req.headers);
        ctx.body = {
            title,
        }
    }
}