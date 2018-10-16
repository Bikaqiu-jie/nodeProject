//下载 mysql 

const db = require('../tools/db_config');
// connection.connect();
// connection.query方法
const checkLogin = function(email,callback) {
    const sql = `select * from users where email=?`;
    db.connection.query(sql,email,(err, data) => {
        if (err) {
            // throw err;
            return callback(err,null);
        }
        callback(null,data);
    })
}


// 导出
module.exports.checkLogin=checkLogin;