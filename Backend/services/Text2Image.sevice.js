const { GoogleGenAI, Modality } = require("@google/genai");
const fs = require("node:fs");

async function main({ prompt }) {
  const ai = new GoogleGenAI({
    apiKey: process.env.NAINIPIX_TEXT2IMAGE_API_KEY,
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image-preview",
    contents: prompt,
  });
  for (const part of response.candidates[0].content.parts) {
    if (part.text) {
      console.log(part.text);
    } else if (part.inlineData) {
      const imageData = part.inlineData.data;
      const buffer = Buffer.from(imageData, "base64");
      fs.writeFileSync("gemini-native-image.png", buffer);
      console.log("Image saved as gemini-native-image.png");
    }
  }
}

module.exports = main;
