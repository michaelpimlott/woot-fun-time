
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('user_name');
    table.string('first_name');
    table.string('last_name');
    table.boolean('is_admin');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
