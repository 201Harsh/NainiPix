const TemplateModel = require("../models/template.model");

module.exports.CreateTemplate = async ({
  name,
  title,
  desc,
  thumbnail,
  category,
  prompt,
  explainer,
  example,
}) => {
  if (
    !name ||
    !title ||
    !desc ||
    !thumbnail ||
    !category ||
    !prompt ||
    !explainer ||
    !example
  ) {
    throw new Error("All fields are required");
  }

  const template = TemplateModel.create({
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

  return template;
};
