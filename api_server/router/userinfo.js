const express = require('express')
const router =express.Router()

// 挂载router
router.get('/userinfo',(req,res)=>{
    res.send('ok')
    
})

// 向外共享路由
module.exports = router
