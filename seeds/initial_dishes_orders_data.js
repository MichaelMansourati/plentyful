
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes_orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes_orders').insert([
        {order_id: 1, dish_id: 5, quantity: 3},
        {order_id: 2, dish_id: 2, quantity: 1},
        {order_id: 3, dish_id: 1, quantity: 2}
      ]);
    });
};
