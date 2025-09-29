const router = require("express").Router();
const TemplateController = require("../controllers/template.controller");

router.post("/create", TemplateController.CreateTemplate);

module.exports = router;
