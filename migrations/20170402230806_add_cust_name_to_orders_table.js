
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.alterTable('orders',(t) => {
  		t.string('cust_name');
  	})
  	])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.alterTable('orders',(t) => {
  		t.dropColumn('cust_name');
  	})
  	])
};
