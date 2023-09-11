const express = require('express')
// 导入路由
const router = require('./n09apirouter.js')
// 导入cors
const cors = require('cors')
// 创建express服务对象
const app = express()

// urlencoded中间件
app.use(express.urlencoded({ extended: false }))

// jsonp中间件 
// 必须在cors前配置,不经过router，直接通过app.get注册路由
app.get('/jsonpapi/jsonp', (req, res) => {
    // 1. 得到jQuery回调函数的名称
    const funcName = req.query.callback
    // 2. 定义要发送到客户端的数据对象
    const data = { name: 'zs', age: 22 }
    // 3. 拼接出 函数名(JSON.stringify后的json对象)
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 4. 把拼接的字符串，响应给客户端
    res.send(scriptStr)
})

// cors中间件  解决接口的跨域问题
app.use(cors())

// app.use注册路由
app.use('/api', router)


app.listen(80, function () {
    console.log('启动服务器：127.0.0.1');
}) 