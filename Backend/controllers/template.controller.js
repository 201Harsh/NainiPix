const TemplateModel = require("../models/template.model");
const TemplateService = require("../services/template.service");

module.exports.CreateTemplate = async (req, res) => {
  try {
    const { name, desc, title ,thumbnail, category, prompt, explainer, example } =
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

    const Istemplate = await TemplateModel.findOne({
      name,
      title,
      desc,
      thumbnail,
      category,
      prompt,
      explainer,
    });

    if (Istemplate) {
      throw new Error("Template already exists");
    }

    const template = await TemplateService.CreateTemplate({
      name,
      title,
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

module.exports.getAllTemplates = async (req, res) => {
  try {
    const Templates = await TemplateModel.find();

    if (!Templates || Templates.length === 0) {
      throw new Error("No Templates found");
    }

    res.status(200).json({
      message: "Templates fetched successfully",
      Templates,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports.getTemplate = async (req, res) => {
  try {
    const { id } = req.params;

    const Template = await TemplateModel.findById(id);

    if (!Template) {
      throw new Error("Template not found");
    }

    res.status(200).json({
      message: "Template fetched successfully",
      Template,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
