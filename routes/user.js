const express = require('express');
const controller = require('../controllers/user');
const router = express.Router();

// create new user
router.post('/', controller.create);
// get user by name or phone
router.get('/', controller.getByNameOrPhone);

module.exports = router;