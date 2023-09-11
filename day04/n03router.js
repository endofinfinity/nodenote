const express = require('express')
// 1 创建路由对象
const router = express.Router()
// 2 挂载具体路由
router.get('/user/list',(req,res)=>{
    res.send('get list')
})

router.post('/user/add',(req,res)=>{
    res.send('post add')
})

// 3 向外导出路由对象
module.exports = router