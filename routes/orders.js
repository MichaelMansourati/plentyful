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

// Post to a new order
router.post('/',(req,res) => {
	// console.log(req.body.items);
	// arrDishes = [{ dish_id: 13, quantity: 3 },{ dish_id: 15, quantity: 2 },{ dish_id: 17, quantity: 2}];
	DataHelpers.insertOrder(JSON.parse(req.body.items),null,'807-213-2133',function(order_id){
		res.render('order_sucess',{ order_id: order_id });
	});
});

router.get('/order',(req,res) => {
	
});



router.get('/',(req,res) => {
	// if (!req.session.admin) {
	// 	res.redirect('/');
	// } else {
		DataHelpers.getOrders(function(err,arrOrders) {
			res.render('orders',{ arrOrders: arrOrders});
		});
	// }
});

router.get('/sms',(req,res) => {
	sendSMS('+14388302735','Testing again from Plentyful',(err,result) => {
		res.send(result);
	})
})

module.exports = router;