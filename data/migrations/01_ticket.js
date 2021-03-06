
exports.up = function(knex) {
  return knex.schema.createTable('ticket', (tbl) => {
    tbl.increments()
    tbl
    .string('twitch_name')
    .notNullable();
  tbl
    .string('discord_name')
    .notNullable();
  tbl
    .string('server')
    .notNullable();
  tbl
    .string('rank_division')
    .notNullable();
  tbl
    .string('summoner_name')
    .notNullable();
  tbl
    .string('primary_role')
    .notNullable();
  tbl
    .string('secondary_role')
    .notNullable();
  })

  tbl.boolean('isApproved').defaultTo(false);

  tbl.boolean('isAccepting').defaultTo(true);

  tbl
    .integer('admin_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('admin')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
};

exports.down = function(knex) {
  
};
