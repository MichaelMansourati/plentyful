
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.alterTable('users',(t) => {
  		t.string('password');
  	})
  	])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.alterTable('users',(t) => {
  		t.dropColumn('password');
  	})
  	])
};
