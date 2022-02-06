const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

// home page
router.get('/', userController.getIndex);

router.get('/import_page', userController.getImportPage);
module.exports = router;
