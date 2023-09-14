const mysql = require('mysql')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'mysql8m1',
    database:'erpdemo'
})

// 测试mysql模块
// db.query('select 1',(err,res)=>{
//     if (err) {
//         console.log(err.message);
        
//     } else{
//         console.log(res);
//     }
// })

// 查询语句
const sqlStr = 'select * from data_goods'
db.query(sqlStr,(err,res)=>{
    if (err) {
        console.log(err.message);
        
    } else{
        // select 结果是个对象数组
        console.log(res);
    }
})

// 插入语句
const data2 = { name: '书法', remark: '文学' }
// 定义带有占位符的插入SQL语句
const sqlStr2 = 'insert into data_goodscategory set ?'
// 执行 SQL 语句
db.query(sqlStr2, data2, (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('插入数据成功')
  }
}) 

// 更新
const data3 = {
    id:7,
    name:'养鱼2',
    remark:''
}
const sqlStr3 = 'update data_goodscategory set ? where id = ?'
db.query(sqlStr3,[data3,data3.id],(err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
      console.log('更新数据成功')
    }
  })


// 标记删除
const sqlStr4 = 'update users set status=? where id=?'
db.query(sqlStr, [1, 6], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('标记删除成功')
  }
})
