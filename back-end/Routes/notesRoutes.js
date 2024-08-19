const express = require('express');
const router = express.Router();
const notesController = require('./../Controllers/notesController');
const authenticateToken = require('./../middleware/authenticateToken');

router.post('/add', authenticateToken, notesController.addNewNote);

module.exports = router;
