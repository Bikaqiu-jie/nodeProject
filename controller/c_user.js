// 处理函数模块

// 导包
const m_user = require('../model/m_user');

// 渲染页面
exports.showSignin = (req,res)=>{
    res.render('signin.html',)
};

// 验证登录
exports.handleSignin = (req,res)=>{
    // 获取请求提交的数据
    const body=req.body;
    // 调用函数
    m_user.checkLogin(body.email,(err,data)=>{//实参
        // 如果服务器错误
        if(err){
            return res.send({
                code:500,
                message:'服务器错误'
            })
        
        };
        // 如果邮箱不存在
        if(!data[0]){
            return res.send({
                code:1,
                message:'邮箱不正确'
            })
        };
        // 邮箱正确 密码错误
        if(data[0].password != body.password){
            return res.send({
                code:2,
                message:'密码错误'
            })
        };
        // 输入正确
        res.send({
            code:200,
            message:'登陆成功'
        })
    })
}
