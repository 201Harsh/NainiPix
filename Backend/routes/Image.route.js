const router = require("express").Router();
const ImageController = require("../controllers/ImageGen.controller");
const AuthMiddleware = require("../middlewares/user.middleware");
const { body } = require("express-validator");
const ValidateMiddleware = require("../middlewares/validate.middleware");

router.post(
  "/gen",
  AuthMiddleware.authUser,
  ImageController.genT2Image
);

module.exports = router;
