var daoMessage = module.exports;
var pool = require('./pool');


daoMessage.insert = function(options,cb){
	var sql = "insert into message2 set ?";
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

daoMessage.getAllMessage = function(options,cb){
	var sql = "select * from message2 order by create_time desc";
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

daoMessage.getMessageById = function(options,cb){
	var sql = "select * from message2 where id=?";
	pool.getConnection(function(err, connection) {
		connection.query(sql,options.id,function(err, results) {
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

daoMessage.updateMessage = function(options,id,cb){
	var sql = "update message2 set ? where id = ?";
	pool.getConnection(function(err, connection) {
		connection.query(sql,options,id,function(err, results) {
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

