const user = require('../models/users.model')
const apiResponse = require('../helpers/apiResponse')
const bcrypt = require("bcryptjs");


const validationError = "Something went wrong!",
  registerError = "Register not complete!",
  registerSuccess = "Registration success!";

  
exports.Regiser = async(req, res) => {
  const user = req.body;
  /* TODO
    
    Build the Ticket tbl seperately and have the user reference the ticket.
    Still need to implement local passport strategy 
    along with the JWT Strategy and Extract JWT
    
  */
  try {

    if(!user.username || !user.password || !user.email) {
      return apiResponse.error(res, "One of the fields is missing.")
    }
  } catch(err) {
    
    return apiResponse.notFound(res,  validationError)

  }
}