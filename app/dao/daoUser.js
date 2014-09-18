var daoUser = module.exports;
var pool = require('./pool');


daoUser.insert = function(options,cb){
	var sql = "insert into user set ?";
	pool.getConnection(function(err, connection) {
		connection.query(sql,options,function(err, results) {
			connection.end();
			if (err) {
				cb(err, null);
				return;
			}
			cb(err, results);
			return;
		});
	});
}

daoUser.getAllUsers = function(options,cb){
	var sql = "select * from user order by create_time desc";
	pool.getConnection(function(err, connection) {
		connection.query(sql,options,function(err, results) {
			connection.end();
			if (err) {
				cb(err, null);
				return;
			}
			cb(err, results);
			return;
		});
	});
}

daoUser.getUserByName = function(options,cb){
	var sql = "select * from user where username=?";
	pool.getConnection(function(err, connection) {
		connection.query(sql,options.username,function(err, results) {
			connection.end();
			if (err) {
				cb(err, null);
				return;
			}
			cb(err, results);
			return;
		});
	});
}

