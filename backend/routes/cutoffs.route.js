const express = require('express');
const router = express.Router();

const { predictorByCutoffs } = require('../controllers/cutoffs.controller');


router.post('/predictor', predictorByCutoffs);

module.exports = router;