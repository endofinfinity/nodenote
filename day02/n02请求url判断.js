const http = require('http')
const server = http.createServer()

server.on('request',(req,res)=>{
    const url = req.url
    let contentHtml = '<h1>404 Not Found!</h1>'

    if (url==='/' || url === '/index.html') {
        contentHtml =  '<h1>首页</h1>'
    } else if (url === '/about.html') {
        contentHtml = '<h1>关于</h1>'
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    res.end(contentHtml)
})

server.listen(8080,()=>{
    console.log('启动成功');
})