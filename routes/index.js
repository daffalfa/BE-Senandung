const express = require('express');
const router = express.Router();
const laguController = require('../controllers/laguController');

router.get('/LaguDaerah',laguController.getLagu);
router.get('/LaguDaerah/:id', laguController.getLagu);
router.get('/pencarian', laguController.getAdvancedsearch); // get search by filter

module.exports = router;