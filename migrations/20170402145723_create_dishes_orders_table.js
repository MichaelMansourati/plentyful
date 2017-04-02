exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable('dishes_orders',function(t) {
  		t.integer('order_id');
  		t.integer('dish_id');
  		t.integer('quantity');
  		t.primary(['order_id','dish_id']);
  	})
  	])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('dishes_orders')
  	])
};
