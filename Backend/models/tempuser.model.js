const mongoose = require("mongoose");

const TempUser = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
    default: Date.now,
    expires: 300,
  },
});

TempUser.index({ otpExpiry: 1 }, { expireAfterSeconds: 300 });

const TempUserModel = mongoose.model("TempUser", TempUser);

module.exports = TempUserModel;
