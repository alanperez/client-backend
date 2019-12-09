const admin = require('../models/admins.model');
const apiResponse = require("../helpers/apiResponse");

async function getUserSubmissions(req,res) {
  const { id } = req.submission;

    try {
      const submissions = await admin.getSubmission(id);
      return apiResponse.success(res,submissions)
    } catch (error) {
      return apiResponse.error(res, "Not Found")
    }
  
}


async function approveUserSubmission(req,res) {
  const { id } = req.params;
  const { isApproved } = req.body;
  admin.approveSubmission(id, isApproved).then((problem) => {
    if (isApproved === true) {
      return apiResponse.success(res, "Approved")
    } else {
      return apiResponse.error(res, "Could not approve at this time")
    }
  })
}
module.exports = { getUserSubmissions }