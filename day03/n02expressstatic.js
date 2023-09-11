const express = require('express')
const app =express()

app.use('/files',express.static('./files'))
app.use(express.static('./clock'))

app.listen(80,()=>{
    console.log('启动成功，在127.0.0.1');
})