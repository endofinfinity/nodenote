const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request',(req,res)=>{
    const url = req.url
    // const urlPath = path.join(__dirname,url) 
    // res.setHeader('Content-Type','text/http; charset=utf-8')
    let urlPath = ''
    if (url==='/') {
        urlPath = path.join(__dirname,'./clock/index.html')
    } else {
        urlPath = path.join(__dirname,'./clock',url)
    }

    fs.readFile(urlPath,'utf8',(err,dataStr)=>{
        if (err) {
            return res.end('404 not found')
        }
        res.end(dataStr)
    })

    
    
})  

server.listen(80,()=>{
    console.log('服务端启动成功');
})