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

module.exports = { getUserSubmissions }