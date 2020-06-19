const express = require('express');
const controller = require('../controllers/chat');
const router = express.Router();

// get new messages from user
router.post('/:id', controller.create);
// send message to user
router.get('/:id', controller.getByuserId);
// send all dialoges
router.get('/', controller.getAll);

module.exports = router;