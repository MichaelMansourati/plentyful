exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable('users',function(t) {
  		t.increments();
  		t.string('name');
  		t.string('telephone');
  		t.boolean('admin').defaultTo(false);
  	})
  	])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.dropTable('users')
  	])
};
