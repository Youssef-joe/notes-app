const express = require('express')
const router = express.Router()
const userController = require('./../Controllers/userController.js')

router.post('/signup', userController.signUp)


module.exports = router

