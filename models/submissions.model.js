const db = require('../data/dbConfig');

module.exports = {
  getSubmissionsById,
  insertSubmission,
  updateSubmission,
  deleteSubmission,
  rateSubmission,
};




function getSubmissionById(id) {
  return db('submissions').where({ id })
    .first();
}

async function addSubmission(submission) {
  const response = await db('submissions').insert(submission);
  return response;
}


function updateSubmision(id, update) {
  return db('submissions')
    .where('id', id)
    .update(update);
}

function delSubmision(id) {
  return db('submissions')
    .where('id', id)
    .del();
}
