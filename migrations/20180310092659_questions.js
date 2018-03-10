exports.up = function (knex, Promise) {
    return knex.schema.createTable("questions", function (table) {
        table.increments('id').primary()
        table.text('title')
        table.text('question')
        table.text('answer1')
        table.text('answer2')
        table.integer('response1')
        table.integer('response2')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists(questions)
};
