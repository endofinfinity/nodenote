const express = require('express')
const app =express()

// 1 定义路由
app.get('/',(req,res)=>{
    throw new Error('服务器内部发生了错误')
    // throw 之后直接退出路由
    res.send('home page')
})
// 2 错误级别中间件，在所有路由的后边来捕获错误
app.use((err,req,res,next)=>{
    console.log('发生了错误：'+err.message);
    res.send('error：'+err.message)
})

app.listen(80,()=>{
    console.log('express server running at http:/127.0.0.1');
})