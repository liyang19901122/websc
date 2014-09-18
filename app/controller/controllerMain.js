var controllerMain = module.exports;
var daoUser = require("../dao/daoUser");
var daoIPO = require("../dao/daoIPO");

controllerMain.index = function(req, res) {
	res.render('index');
}

controllerMain.userLogin = function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	var now = new Date();

	var options = {
		username : username,
		password : password
	}

	daoMessage.getUserByName(options,function(data){
		if(data&&data.length>0){
			//user = data[0].name;
			passwordStore = data[0].password;
			if(password===passwordStore){
				var result = {
					status:1,
					msg:"",
					username:name,
					userid:data[0].id
				}
				res.send(result);
				return;
			}else{
				var result = {
					status : 0,
					msg : "password wrong"
				}
				res.send(result);
				return;
			}
		}else{
			var insertOptions = {
				username : username,
				password : password,
				create_time : now,
				update_time : now
			}
			daoUser.insert(insertOptions,function(insertRes){
				var result = {
					status:1,
					msg:"",
					username:username,
					userid:inserRes.id
				}
				res.send(result);
				return;
			});
		}
	});
}

controllerMain.addIPO = function(req,res){
	var username = req.body.use.name;
	var txid = req.body.txid;
	var refund = req.body.refund;
	var amount = req.body.amount;
	var userid = req.body.userid;
	var now = new Date();
	var options = {
		username : username,
		txid : txid,
		refund : refund,
		amount : amount,
		userid : userid,
		create_time : now,
		status : "check"
	}
}


/*
controllerMain.admin = function(req,res){
	res.render('admin/index');
	return;
}

controllerMain.list = function(req,res){
	res.render('admin/list');
	return;
}

controllerMain.edit = function(req,res){
	var id = req.query.id;
	var options = {
		id : id
	}
	daoMessage.getMessageById(options,function(data){
		res.render('admin/edit',{message:data});
		return;
	});
	return;
}

controllerMain.createMessage = function(req, res) {
	var title = req.body.title;
	var desc = req.body.desc;
	var code = req.body.code;
	var link = req.body.link;
	var now = new Date();
	var message = {
		title: title,
		code: code,
		link: link,
		desc: desc,
		update_time: now,
		create_time: now
	}
	daoMessage.insert(message, function(err, results) {
		res.send("ok")
		return;
	});
	return;
}

controllerMain.getAllMessage = function(req, res) {
	daoMessage.getAllMessage(function(err, results) {
		res.send(results);
		return;
	});
	return;
}


controllerMain.editMessage = function(req,res){
	var data = req.body;
	var id = data.id;
	var opt = {
		title : data.title,
		link : data.link,
		desc : data.desc,
		code : data.code
	}
	daoMessage.updateMessage(opt,id,function(){
		res.send("ok");
		return;
	})
	return;
}*/

