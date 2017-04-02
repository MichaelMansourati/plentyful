
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable('dishes',(t) => {
  		t.increments();
  		t.string('name');
  		t.string('description');
  		t.decimal('price');
  	})
  	])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('dishes')
  	])
};
