
const express = require('express');
const router = express.Router();

const travelersController = require('../controllers/travelers');

router.get('/travel', travelersController.travel);

module.exports = router;

