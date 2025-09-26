const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  images: [
    {
      url: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      template: {
        type: String,
      },
    },
  ],
});

const UserImage = mongoose.model("UserImage", ImageSchema);

module.exports = UserImage;
