// 导入express模块
const express = require('express')
const app =express()

// 定义中间件函数
const mw1 = (req,res,next)=>{
    console.log('调用了局部生效的中间件');
    next()
}
// 创建路由,局部中间件多一个参数
app.get('/',[mw1],(req,res)=>{
    res.send('home page')
})
app.get('/user',function (req,res) {  
    res.send('user page')
})

// 调用app.listen方法监听端口
app.listen(80,function () {  
    console.log('express server running at http://127.0.0.1');
})