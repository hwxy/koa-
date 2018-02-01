const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const body = require('koa-body');
const logger = require('koa-logger');
const render = require('./render/render.js')
app.use(body());
app.use(logger());
app.use(render)
var post=[];
router.get('/', async function(ctx,next){
    await ctx.render('./index',{posts:post});
}).get('/form',async function(ctx){
    await ctx.render('./post');
}).post('/post',async function(ctx){
    var body=ctx.request.body;
    post.push(body)
    console.log(body)
   ctx.redirect('/');
})
app.use(router.routes())
app.listen(4000,function(){
    console.log('启动成功')
})