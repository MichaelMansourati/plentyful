module.exports = function(knex) {

	function calcOrderTotalPrice(arrDishes,cb) {
		let total = 0;
		let promise = new Promise((resolve,reject) => {
			arrDishes.forEach((dishObj,index) => {
				knex('dishes').where('id',dishObj.dish_id).then((res) => {
					total += +res[0].price * dishObj.quantity;
					if (index == arrDishes.length -1) {
						resolve();
					}
				});
			});
		}).then(function() {
			cb(total);	
		});
	}

	return {
		// Receives an array of objDishes with the dish id and quantity
		insertOrder: function(arrDishes,user_id,customerPhone,callback) {
			// Example arrDishes 
			// [{ dish_id: 1, quantity: 3 },{ dish_id: 3, quantity: 2 },{ dish_id: 4, quantity: 2}]
			calcOrderTotalPrice(arrDishes,(total) => {
				// Having the total, insert the order in the orders table
				knex('orders').insert({ total_price: total, status: 'preparing', cust_phone: customerPhone, est_time: 20 })
				.returning('id').then((order_id) => {
					// Having the order_id, insert the items in dishes_orders table
					new Promise((resolve,reject) => {
						arrDishes.forEach((dishObj,index) => {
							knex('dishes_orders').insert({ order_id: order_id[0], dish_id: dishObj.dish_id, quantity: dishObj.quantity })
							.then(() => {
								if (index == arrDishes.length -1) resolve();
							})
						})
					}).then(function() {
						callback(order_id[0]);
					});
				})
			});
		}
	}
}