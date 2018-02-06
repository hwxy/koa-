var Koa=require('koa');
var app =new Koa();
var router=require('koa-router')();
var fs=require('fs.promised');
var body=require('koa-body')();
router.get('/:id',async (ctx,next)=>{

    console.log(ctx.params)
     ctx.body= await fs.readFile('./form.html','utf8')
})
router.post('/post',async (ctx,next)=>{
      var arr =ctx.request.body;
      var str=JSON.stringify(arr);   
      fs.writeFile('a.json',str)
})
app.use(body);
app.use(router.routes());
app.listen(3000,function(){
    console.log('启动')
})