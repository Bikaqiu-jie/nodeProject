// 路由模块

// 导包
const express = require('express');
const c_topic=require('./controller/c_topic');
const c_user = require('./controller/c_user');

const router = express.Router();
// 处理请求
// 路由分发
router.get('/signin',c_user.showSignin)
.post('/signin',c_user.handleSignin)
.get('/',c_topic.showTopic)

module.exports = router;