const express = require('express')
const router = express.Router()


// 挂载路由
router.get('/get',(req,res)=>{
    const query = req.query
    res.send({
        status:1,
        msg:"get 请求成功",
        data:query
    })
})

router.post('/post',(req,res)=>{
    // body内容需要在app.use注册路由之前设置中间件urlencoded
    const body = req.body
    res.send({
        status:1,
        msg:"post 请求成功",
        data:body
    })
})

// 预检请求测试
router.delete('/delete',(req,res)=>{
    // body内容需要在app.use注册路由之前设置中间件urlencoded
    res.send({
        status:1,
        msg:"del 请求成功",
    })
})






module.exports = router