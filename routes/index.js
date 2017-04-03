var express = require('express');
var router = express.Router();
const dbsettings = require('../lib/DbSettings')
const knex = require('knex')(dbsettings);
const DataHelpers = require('../lib/DataHelpers')(knex);
const twilio = require('twilio');
const dotnev = require('dotenv').config({path:'../'});
const client = twilio(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_TOKEN);

function sendSMS(cust_number,body,callback) {
	client.sendMessage({
		body: body,
		to: cust_number,
		from: '+13065000498'
	},callback);
}

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.query.name && req.query.phone) {
		let phone = decodeURIComponent(req.query.phone);
		sendSMS(req.query.phone,'Your order has been placed',function(err,res) {
			res.redirect('/order')
		});
	}
	DataHelpers.getDishes(function(err,results) {
		let dishesObj = {};
		if (err) res.send(err);
		results.forEach((record) => {
			if (dishesObj[record.category]) {
				dishesObj[record.category].push(record);
			} else {
				dishesObj[record.category] = [];
				dishesObj[record.category].push(record);
			}
		})
		res.render('index', { title: 'Express', dishes: dishesObj });
	})
  
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
