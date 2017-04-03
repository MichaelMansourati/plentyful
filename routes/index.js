var express = require('express');
var router = express.Router();
const dbsettings = require('../lib/DbSettings')
const knex = require('knex')(dbsettings);
const DataHelpers = require('../lib/DataHelpers')(knex);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',(req,res) => {
	if (!req.session.user_id) {
		res.render('login');	
	} else {
		res.redirect('/orders');
	}
});

router.post('/login',(req,res) => {
	if (req.session.user_id) {
		res.redirect('/orders');
	}
	DataHelpers.loginUser(req.body.username,req.body.password,function(err,userList) {
		if (err) throw err;
		let user = userList[0];
		if (user) {
			req.session.user_id = user.id;
			req.session.username = user.username;
			req.session.admin = user.admin;
			if (user.admin) {
				res.redirect('/orders');	
			}
			else {
				res.redirect('/');
			}
		} else {
			res.redirect('/login');
		}
	});
})

module.exports = router;
