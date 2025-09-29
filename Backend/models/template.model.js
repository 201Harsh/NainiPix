const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  explainer: {
    type: String,
    required: true,
  },
  example: [
    {
      text: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],
});

const Template = mongoose.model("Template", TemplateSchema);

module.exports = Template;

