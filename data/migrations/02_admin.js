
exports.up = function(knex) {
  return knex.schema.createTable("admin", tbl => {
    tbl.increments();
    tbl.string('email', 256).unique();
    tbl.string('google_id', 255);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('admin')
};
