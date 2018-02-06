const Koa = require('koa');
const Router = require('koa-router')();
const Monk = require('monk');
// 创建一个Koa对象表示web app本身:
const app = new Koa();
const db=new Monk('localhost:27017/student');//链接到库
const student = db.get('user3');//表
// student.insert({name:'胡',age:18})// 插入一条
// student.insert([{name:'胡',age:18},{name:'熊',age:18}]);//插入多条
student.update({name:'胡'},{name:'为'},function(){  //更新一条
    db.close()
})

student.find({name:'胡'}).then((doc)=>{  //查找数据
    console.log(doc)
}) 

student.remove({name:'hu'}) //删除一条
app.use(Router.routes());
app.listen(3000,function(){
    console.log(1)
})
