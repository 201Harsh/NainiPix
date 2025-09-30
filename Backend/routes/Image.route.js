const router = require('express').Router();
const ImageController = require('../controllers/ImageGen.controller');
const { body } = require('express-validator');
const ValidateMiddleware = require('../middlewares/validate.middleware');
const AuthMiddleware = require('../middlewares/user.middleware');


module.exports = router;