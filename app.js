//导包
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
// 配置包
const app = express();
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({ extended: false }));

// 静态资源
app.use('/node_modules',express.static('./node_modules'));
app.use('/public',express.static('./public'));

app.use(router);
// 绑定端口号
app.listen(12347,()=>{
    console.log('run it')
})