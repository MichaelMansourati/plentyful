
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable('orders',(t) => {
  		t.increments();
  		t.integer('user_id');
  		t.decimal('total_price');
  		t.enu('status',['preparing','ready','finished']);
  		t.string('cust_phone');
  		t.integer('est_time');
  	})
  	])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('orders')
  	])
};

