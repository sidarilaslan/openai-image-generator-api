const express = require('express');
const validate = require('../middlewares/validate');
const schemas = require('../validations/openaiValidator');
const imageController = require('../controllers/openaiController');
const router = express.Router();

router.route('/api/openai/generate-image')
    .post(validate(schemas.createValidator), imageController.generateImage);


module.exports = router;