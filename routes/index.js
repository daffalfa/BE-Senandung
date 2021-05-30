const express = require('express');
const router = express.Router();
const laguController = require('../controllers/laguController');

router.get('/LaguDaerah',laguController.getLagu);
router.get('/LaguDaerah/:id', laguController.getLagu);

module.exports = router;