const express = require('express');
const validate = require('../middlewares/validate');
const schemas = require('../validations/openaiValidator');
const imageController = require('../controllers/openaiController');
const router = express.Router();

router.route('/generateImage')
    .post(validate(schemas.createValidator), imageController.generateImage);


module.exports = router;