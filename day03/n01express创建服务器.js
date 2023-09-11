// 1 导入express
const express = require('express')

// 2 创建web服务
const app = express()

// 4 监听get和post请求
app.get('/user',(req,res)=>{
    res.send({name:'zs',age:20,gender:'男'})
})
app.post('/user',(req,res)=>{
    res.send('post请求成功')
})

app.get('/',(req,res)=>{
    console.log(req.query);
    res.send(req.query)
})
// 带动态参数
app.get('/user/:ids/:username',(req,res)=>{
    console.log(req.params);
    res.send(req.params)
})

// 3 启动web服务，好像flask
app.listen(80,()=>{
    console.log('启动成功, http://127.0.0.1');
})