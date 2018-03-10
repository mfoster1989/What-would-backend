
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, title: "", question: "", question2: "", answer1: "", answer2: "", response1: "", response2: ""},
      ]);
    });
};
