const User = require('./../models/user.model.js')
const {body} = require("express-validator")

let userValidations = () => {
	body("userName").notEmpty().withMessage("Full Name Can't be empty"),
	body("email").notEmpty().withMessage("email can't be empty"),
	body("password").notEmpty().withMessage("email field can't be empty")
}

module.exports = userValidations