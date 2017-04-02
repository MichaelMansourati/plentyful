
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'John Marks', username: 'user1@example.org', telephone:'807-213-4130', password: '$2a$10$OdFkYCK2i7wFALY6gyA5S..uF0L1zJHEw4Xf79VI6vzEKOEtdBVhm' },
        { name: 'John Marks', username: 'user2@example.org', telephone:'807-213-4130', password: '$2a$10$OdFkYCK2i7wFALY6gyA5S..uF0L1zJHEw4Xf79VI6vzEKOEtdBVhm' },
        { name: 'Robert Seann', username: 'user2@example.org', telephone:'807-213-4130', password: '$2a$10$OdFkYCK2i7wFALY6gyA5S..uF0L1zJHEw4Xf79VI6vzEKOEtdBVhm' },
        { name: 'Bruno Cabral', username: 'bruno@bruno.com', telephone:'807-213-4130', password: '$2a$10$OdFkYCK2i7wFALY6gyA5S..uF0L1zJHEw4Xf79VI6vzEKOEtdBVhm', admin: true },
      ]);
    });
};
