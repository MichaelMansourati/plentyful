var express = require('express');
var router = express.Router();
const dbsettings = require('../lib/DbSettings')
const knex = require('knex')(dbsettings);
const DataHelpers = require('../lib/DataHelpers')(knex);
const twilio = require('twilio');
const dotnev = require('dotenv').config({path:'../'});
const client = twilio(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_TOKEN);
const methodOverride = require('method-override');
router.use(methodOverride('_method'));

function sendSMS(cust_number,body,callback) {
	client.sendMessage({
		body: body,
		to: cust_number,
		from: '+13065000498'
	},callback);
}

// Post to a new order
router.post('/',(req,res) => {
	// arrDishes = [{ dish_id: 13, quantity: 3 },{ dish_id: 15, quantity: 2 },{ dish_id: 17, quantity: 2}];
	DataHelpers.insertOrder(JSON.parse(req.body.items),null,'4388302735',function(order_id){
		res.render('order_sucess',{ order_id: order_id });
	});
});

router.get('/:id/edit',(req,res) => {
	DataHelpers.getOrder(req.params.id,(err,order) => {
		if (err) throw err;
		res.render('edit_order',{ order: order[0] });	
	})
});

router.put('/:id',(req,res) => {
  if (!req.session.admin) {
    res.redirect('/');
  } else {
   DataHelpers.getOrder(req.params.id,(err,order) => {
		if (err) throw err;
		sendSMS('+' + order[0].cust_phone,`Your order will be ready in ${req.body.estimate_time} minutes!`,(err,results) => {
			if (err) throw err;
			DataHelpers.updateOrder(req.params.id,{status: order[0].status},(err,result) => {
				if (err) throw err;
				res.redirect('/orders');	
			})
			
		})
	}) 
  }
});

router.get('/',(req,res) => {
	if (!req.session.admin) {
		res.redirect('/');
	} else {
		DataHelpers.getOrders(function(err,arrOrders) {
			res.render('orders',{ arrOrders: arrOrders});
		});
	}
});

module.exports = router;