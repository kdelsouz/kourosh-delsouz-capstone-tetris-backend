
exports.up = function(knex) {
    return knex.schema
    .createTable('scores', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('score').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('scores');
};
