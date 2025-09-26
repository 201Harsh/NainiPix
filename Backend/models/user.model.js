const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

UserSchema.methods.JwtGen = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return token;
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

UserSchema.statics.hashPassword = async function (password) {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
