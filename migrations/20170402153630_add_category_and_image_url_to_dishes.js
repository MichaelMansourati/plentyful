
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.alterTable('dishes',(t) => {
  		t.string('category');
  		t.string('image_url');	
  	})
  	])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  	knex.schema.alterTable('dishes',(t) => {
  		t.dropColumn('category');
  		t.dropColumn('image_url')	
  	})
  	])
};
