exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([{
        firstname: 'David',
        lastname: 'Miller',
        username: 'Hawky454',
        gender: 'male'
      }, ]);
    });
};
