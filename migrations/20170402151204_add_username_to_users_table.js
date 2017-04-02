
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.alterTable('users',(t) => {
  		t.string('username');
  	})
  	])
};

exports.down = function(knex, Promise) {
return Promise.all([
	knex.schema.alterTable('users',(t) => {
		t.dropColumn('username');
	})
	])
};
