const express = require('express');
const imageController = require('../controllers/openaiController');
const router = express.Router();

router.get('/generateImage', imageController.generateImage);


module.exports = router;