const http = require("http")
// 1 创建web服务实例
const server = http.createServer()
// 2 绑定request事件
server.on('request',(req,res)=>{
    console.log('require visit');
    const url = req.url
    const method = req.method
    const str = `your request 地址 is ${url},method is ${method}`
    // 中文乱码问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(str)
})
// 3 启动
server.listen(8080,()=>{
    console.log('启动成功');
})