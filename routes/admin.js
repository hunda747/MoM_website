const path = require('path');
// const path = require('path');


const express = require('express');

const adminController = require('../controllers/admin');
const apiAdminController = require('../controllers/apiAdminController');
const authorize = require('../middlewares/authorize');

const router = express.Router();

router.get('/login', adminController.getLogin);

router.post('/adminLogin', adminController.getUser);

router.post('/requests', adminController.getRequest)

router.post('/api/adminLogin', apiAdminController.getUser);

router.post('/api/requests', authorize.verifyToken, apiAdminController.getRequest);

router.get('/api/request/:requestId', authorize.verifyToken, apiAdminController.getProduct);

router.post('/api/respond/:id/:message', authorize.verifyToken, apiAdminController.getEmail);





module.exports = router;