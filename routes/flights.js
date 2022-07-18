var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

// Get /flights (index functionality)
router.get('/', flightsCtrl.index)

// Get /flights/new (new functionality)
router.get('/new', flightsCtrl.new);

// Get /flights/:id (show functionality)
router.get ('/:id', flightsCtrl.show)

// Post  /flights (create functionality)
router.post('/', flightsCtrl.create)

module.exports = router;
