const T2ImageGen = require("../services/Text2Image.sevice");

module.exports.genT2Image = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      throw new Error("Prompt is required");
    }

    const imageGen = await T2ImageGen({ prompt });
    res.status(200).json({
      message: "Image generated successfully",
      imageGen,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
