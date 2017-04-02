
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.alterTable('dishes',(t) => {
  		t.string('image_url',500).alter();
  	})
  	])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.alterTable('dishes',(t) => {
  		t.string('image_url').alter();
  	})
  	])
};
