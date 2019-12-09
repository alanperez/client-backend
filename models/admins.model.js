const db = require('../data/dbConfig')

module.exports = {
  getAdmin,
  getByEmail,
  add,
}

function getAdmin() {
  return db('admin').select('id', 'email');
}

function getByEmail(filter) {
  return db('admin')
    .where('email', '=', filter)
    .first();
}
function add(admin) {
  return db('admin').insert(admin, 'id');
}
