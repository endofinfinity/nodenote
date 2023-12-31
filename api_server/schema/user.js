// 导入定义验证规则的包
const joi = require('@hapi/joi')

// 1 登录注册模块 定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

// 2.1 个人信息模块 定义 id, nickname, email 的验证规则
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const user_email = joi.string().email().required()

// 2.3 个人信息模块 定义 avatar 的验证规
// dataUri() 指的是如下格式的字符串数据：
// data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=
const avatar = joi.string().dataUri().required()

// 1 登录注册模块 定义并导出用户名和密码的验证规则对象
exports.reg_login_schema = {
  body: {
    username,
    password,
  },
}

// 2.1 个人信息模块 验证规则对象 - 用户基本信息
exports.update_userinfo_schema = {
  // 需要对 req.body 里面的数据进行验证
  body: {
    id,
    nickname,
    email: user_email,
  },
}

// 2.2 个人信息模块 验证规则对象 - 重置密码
exports.update_password_schema = {
  body: {
    // 使用 password 这个规则，验证 req.body.oldPwd 的值
    oldPwd: password,
    // 使用 joi.not(joi.ref('oldPwd')).concat(password) 规则，验证 req.body.newPwd 的值
    // 解读：
    // 1. joi.ref('oldPwd') 表示 newPwd 的值必须和 oldPwd 的值保持一致
    // 2. joi.not(joi.ref('oldPwd')) 表示 newPwd 的值不能等于 oldPwd 的值
    // 3. .concat() 用于合并 joi.not(joi.ref('oldPwd')) 和 password 这两条验证规则
    newPwd: joi.not(joi.ref('oldPwd')).concat(password),
  },
}


// 2.2 个人信息模块 验证规则对象 - 更新头像
exports.update_avatar_schema = {
  body: {
    avatar,
  },
}
