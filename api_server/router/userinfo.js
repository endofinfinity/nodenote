const express = require('express')
const router =express.Router()

// 1 登录注册模块 导入userinfo处理函数
const userinfo_handler = require('../router_handler/userinfo.js')
// 2 个人信息模块 导入验证中间件
const expressJoi = require('@escook/express-joi')
// 2 个人信息模块 导入验证对象
const {update_userinfo_schema} = require('../schema/user.js')


// 1 登录注册模块 挂载用户信息router
router.get('/userinfo',userinfo_handler.getUserInfo)
// 2 个人信息模块 挂载个人信息验证router
router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo)


// 向外共享路由
module.exports = router
