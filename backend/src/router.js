const express = require('express');
const router = express.Router();
const Controller = require('./Controller');

router.get('/view', Controller.index);
router.post('/create', Controller.store);

module.exports = router;