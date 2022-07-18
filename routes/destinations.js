const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// The starts with path is '/'

// Post /flights/:id/destinations (create functionality)
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;