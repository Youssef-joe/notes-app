const {body} = require('express-validator')
// const User = require('./../../models/userModel.js')

let userValidations = ()=> {
    return [
        body('fullName').notEmpty().withMessage("fullName field cannot be empty"),
        body('email').notEmpty().withMessage(`email field can't be empty`),
        body('password').notEmpty().withMessage(`password field can't be empty`)
    ]
}

module.exports = userValidations