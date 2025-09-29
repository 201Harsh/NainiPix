const router = require("express").Router();
const TemplateController = require("../controllers/template.controller");
const { body } = require("express-validator");

router.post(
  "/create",
  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("Name should be at least 3 characters long"),
    body("desc")
      .isLength({ min: 3 })
      .withMessage("Description should be at least 3 characters long"),
    body("thumbnail").isURL().withMessage("Thumbnail should be a valid URL"),
    body("category")
      .isLength({ min: 3 })
      .withMessage("Category should be at least 3 characters long"),
    body("prompt")
      .isLength({ min: 3 })
      .withMessage("Prompt should be at least 3 characters long"),
    body("explainer")
      .isLength({ min: 3 })
      .withMessage("Explainer should be at least 3 characters long"),
    body("example")
      .isLength({ min: 3 })
      .withMessage("Example should be at least 3 characters long"),
  ],
  TemplateController.CreateTemplate
);

module.exports = router;
