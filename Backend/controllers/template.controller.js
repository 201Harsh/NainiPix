const TemplateModel = require("../models/template.model");
const TemplateService = require("../services/template.service");

module.exports.CreateTemplate = async (req, res) => {
  try {
    const { name, desc, thumbnail, category, prompt, explainer, example } =
      req.body;

    if (
      !name ||
      !desc ||
      !thumbnail ||
      !category ||
      !prompt ||
      !explainer ||
      !example
    ) {
      throw new Error("All fields are required");
    }

    const template = await TemplateService.CreateTemplate({
      name,
      desc,
      thumbnail,
      category,
      prompt,
      explainer,
      example,
    });

    if (!template) {
      throw new Error("Error! Template not created");
    }

    res.status(200).json({
      message: "Template created successfully",
      template,
    });

  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports.getAllTemplates = async (req, res) => {}