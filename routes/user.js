const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

// home page
router.get('/', userController.getIndex);


module.exports = router;
