const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const { body } = require("express-validator");
const ValidateMiddleware = require("../middlewares/validate.middleware");
const AuthMiddleware = require("../middlewares/user.middleware");

router.post(
  "/register",
  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("Name should be at least 3 characters long"),
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password should be at least 6 characters long"),
  ],
  ValidateMiddleware.validateData,
  UserController.registerUser
);

router.post(
  "/verify",
  [body("email").isEmail().withMessage("Please enter a valid email")],
  ValidateMiddleware.validateData,
  UserController.verifyOtp
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password should be at least 6 characters long"),
  ],
  ValidateMiddleware.validateData,
  UserController.loginUser
);

router.get("/profile", AuthMiddleware.authUser, UserController.getUserProfile);

module.exports = router;
