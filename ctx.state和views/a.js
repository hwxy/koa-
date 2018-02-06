var koa=require('koa');
var app=new koa();
var router=require('koa-router')();
const view = require('koa-views');
var path=require('path');
router.get('/',async function(ctx){
    ctx.state.name=2
    await ctx.render('./a.html');
 
})
app.use(view(path.join(__dirname,'./view'),{
    map:{html:'ejs'}
}))
app.use(router.routes());
app.listen(3001)