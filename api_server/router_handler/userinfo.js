// 1 导入数据库操作模块
const db = require('../db/index.js')
// 2.2 个人信息模块 重置密码-密码验证对象
const { update_userinfo_schema, update_password_schema } = require('../schema/user.js')
const bcrypt = require('bcryptjs')



// 1 登录注册模块 获取用户基本信息的处理函数
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

// 2.1 个人信息模块 更新用户基本信息的处理函数
exports.updateUserInfo = (req, res) => {
    const sql = `update ev_users set ? where id=?`
    db.query(sql, [req.body, req.body.id], (err, results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)
        // 执行 SQL 语句成功，但是影响行数不等于 1
        if (results.affectedRows !== 1) return res.cc('更新用户的基本信息失败！')
        // 成功
        res.cc('更新用户信息成功！', 0)
    })
}

// 2.2 个人信息模块 重置密码处理函数
exports.updatePassword = (req, res) => {
    // res.send('ok')
    // 定义根据 id 查询用户数据的 SQL 语句
    const sql = `select * from ev_users where id=?`

    // 执行 SQL 语句查询用户是否存在
    db.query(sql, req.user.id, (err, results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)

        // 检查指定 id 的用户是否存在
        if (results.length !== 1) return res.cc('用户不存在！')

        // TODO：判断提交的旧密码是否正确
        // 判断提交的旧密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        // compareSync() 函数的返回值为布尔值，true 表示密码正确，false 表示密码错误
        if (!compareResult) return res.cc('原密码错误！')

        // 定义更新用户密码的 SQL 语句
        const sql = `update ev_users set password=? where id=?`

        // 对新密码进行 bcrypt 加密处理。第一个参数为加密的数据（data）必须为String类型的值，第二个参数为salt 加密程度，类型必须是Number 。 这里salt的值可以 理解为加密的程度，salt值越大，越消耗时间，加密的程度也会越高
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)

        // 执行 SQL 语句，根据 id 更新用户的密码
        db.query(sql, [newPwd, req.user.id], (err, results) => {
            // SQL 语句执行失败
            if (err) return res.cc(err)

            // SQL 语句执行成功，但是影响行数不等于 1
            if (results.affectedRows !== 1) return res.cc('更新密码失败！')

            // 更新密码成功
            res.cc('更新密码成功！', 0)
        })
    })
}