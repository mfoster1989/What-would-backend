exports.up = function (knex, Promise) {
    return knex.schema.createTable("questions", function (table) {
        table.increments('id').primary()
        table.text('title')
        table.string('question')
        table.text('answer1')
        table.text('answer2')
        table.integer('response1')
        table.integer('response1')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists(questions)
};
