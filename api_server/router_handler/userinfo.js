// 导入数据库操作模块
const db = require('../db/index.js')



// 获取用户基本信息的处理函数
exports.getUserInfo = (req, res) => {
    
    // console.log('user',req.user);
  
    // 定义sql语句,虽然可以select *然后结构给查询结果中的password赋值为0，为了安全，直接不查询加密后的password的token
    const sql = `select id, username, nickname, email, user_pic from ev_users where id=?`

    db.query(sql, req.user.id, (err, results) => {
        // console.log('user ',req.user);

        // 7以上版本的express-jwt里获取id(注册登录时jwt-token里含有id，自动挂载到请求对象req上)的req.user.id 替换成req.auth.id
        if (err) return res.cc(err)
        // console.log('1111');
        if (results.length !== 1) return res.cc('获取用户信息失败！')

        res.send({
            status: 0,
            message: "获取用户信息成功",
            data: results[0],
        })
    })

}

// 更新用户基本信息的处理函数
exports.updateUserInfo = (req,res) =>{
    const sql = `update ev_users set ? where id=?`
    db.query(sql,[req.body,req.body.id],(err,results)=>{
        // 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 执行 SQL 语句成功，但是影响行数不等于 1
    if (results.affectedRows !== 1) return res.cc('更新用户的基本信息失败！')
    // 成功
    res.cc('更新用户信息成功！', 0)
    })
}