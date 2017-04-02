
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        { user_id: 1, total_price: 27.90, status: 'preparing', cust_phone: '807-132-1233', est_time: 20 },
        { user_id: 3, total_price: 13.90, status: 'ready', cust_phone: '807-132-1287', est_time: 12 },
        { user_id: 2, total_price: 28.90, status: 'preparing', cust_phone: '807-132-1233', est_time: 12 },
        { user_id: 4, total_price: 15.90, status: 'preparing', cust_phone: '807-132-1234', est_time: 5 },
        { user_id: 5, total_price: 21.90, status: 'finished', cust_phone: '807-132-1256', est_time: 23 },
      ]);
    });
};
