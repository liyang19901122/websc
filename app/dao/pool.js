var mysql = require('mysql');
var mysqlConfig = require('../../config/mysql.json');

var pool  = mysql.createPool({
  host     : mysqlConfig.host,
  user     : mysqlConfig.user,
  password : mysqlConfig.password,
  database : mysqlConfig.database,
  charset : "utf8",
  connectionLimit : 5
});

var selectSQL ="show variables like 'wait_timeout'";

pool.getConnection(function (err, conn) {
    function query(){
        conn.query(selectSQL, function (err, res) {
            conn.end();
        });
    }
    query();
    setInterval(query, 5000);
});



module.exports = pool;
