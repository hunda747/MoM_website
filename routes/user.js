const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

// home page
router.get('/', userController.getIndex);
router.get('/export_page', userController.getExportPage);
router.get('/import_page', userController.getImportPage);
router.get('/overview', userController.getOverview);
module.exports = router;
