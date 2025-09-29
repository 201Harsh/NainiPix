const TemplateModel = require("../models/template.model");

module.exports.CreateTemplate = async ({
  name,
  desc,
  thumbnail,
  category,
  prompt,
  explainer,
  example,
}) => {
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
};
