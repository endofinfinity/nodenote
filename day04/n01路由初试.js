const express = require('express')
const app = express()

// 路由挂载，分3部分组成：请求类型，请求URL，服务器端处理函数
app.get('/',(req,res)=>{
    console.log('请求/');
    res.send('get请求/')
})
app.post('/user',(req,res)=>{
    res.send('post请求/user')
})



// 监听端口
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})