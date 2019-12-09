exports.up = function (knex) {
  return knex.schema.createTable('user', (tbl) => {
    tbl.increments();
    tbl
      .string('username')
    tbl
      .string('email')
      .notNullable();

    tbl.integer('ticket_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ticket')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user');
};
