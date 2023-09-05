const fs = require('fs')

fs.readFile('./day01/11.txt','utf-8',function (err,dataStr) {  
    console.log(err);
    console.log('---------');
    console.log(dataStr);
})