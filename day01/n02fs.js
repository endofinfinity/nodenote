const fs = require('fs')

fs.readFile('22.txt','utf-8',function (err,dataStr) {  
    console.log(err);
    if (err) {
        return console.log(err);
    }
    console.log('成功'+dataStr);
    const arrOld = dataStr.split(' ')
    const arrNew = []
    arrOld.forEach(item=>{
        arrNew.push(item.replace('=',':'))
    })
    const strNew = arrNew.join('\r\n')
    console.log(strNew);
    const listNew = arrOld.map(item=>{
        return item.replace('=',':')
    }).join('\r\n')
    console.log('listNew'+listNew);
    fs.writeFile('33.txt',strNew,function (err,dataStr) {  
        if (err) {
            console.log(err.messsage);
        }
        console.log('写入成功');
    })
})