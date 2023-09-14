const express = require('express')
// 导入userinfo处理函数
const userinfo_handler = require('../router_handler/userinfo.js')

const router =express.Router()
// 挂载router
router.get('/userinfo',userinfo_handler.getUserInfo)

// 向外共享路由
module.exports = router
