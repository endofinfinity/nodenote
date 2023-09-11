const express =require('express')
const app = express()

// 中间件有next参数
app.use((req,res,next)=>{
    const time = Date.now()
    // req对象挂在自定义属性
    req.startTime = time
    // 中间件利用next方法返回数据
    next()
})

// 多个路由共享中间件
app.get('/',(req,res)=>{
    res.send('home page'+req.startTime)
})

app.get('/user',(req,res)=>{
    res.send('user page'+req.startTime)
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})