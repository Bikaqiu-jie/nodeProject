
// 导包
const mysql = require('mysql');
    
// 配置包
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'msg52'
});

exports.connection=connection;