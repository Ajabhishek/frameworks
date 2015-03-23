var users = require('../models/users');

var userController = {
	users: function(req, res, next){
		res.render('users', {title: 'User list'});
	},
	getAll: function(req, res, next){
		res.json(users);
	},
	getOne: function(req, res, next){
		var username = req.params.username;
		res.json(users[username]);
	},
	login: function(req, res, next){
		var username = req.body.username,
			password = req.body.password;
		var user = users[username];
		if(user){
			if(user.password === password){
				res.redirect('/users');
			}
			else{
				res.render('index', {message: "Wrong password"});
			}
		}
		else{
			res.render('index', {message: "Wrong username"});
		}
	}
};

module.exports = userController;
