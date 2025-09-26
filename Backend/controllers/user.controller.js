const UserModel = require("../models/user.model");
const TempUserModel = require("../models/tempuser.model");
const UserService = require("../services/user.service");

module.exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }

    const ifuser = await UserModel.findOne({ email });

    if (ifuser) {
      throw new Error("User already exists");
    }

    const iftempuser = await TempUserModel.findOne({ email });

    if (iftempuser) {
      throw new Error("User already exists");
    }
    const otp = Math.floor(1000 + Math.random() * 9000);

    const HashedPassword = await UserModel.hashPassword(password);

    const tempuser = await UserService.createTempUser({
      name,
      email,
      password: HashedPassword,
      otp,
    });

    if (!tempuser) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      message: "OTP sent successfully",
      tempuser,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      throw new Error("All fields are required");
    }

    const user = await UserService.VerifyOtp({ email, otp });

    if (!user) {
      throw new Error("Something went wrong");
    }

    const token = await user.JwtGen();

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.status(200).json({
      message: "Account Created successfully",
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("All fields are required");
    }

    const User = await UserModel.findOne({ email });

    if (!User) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await User.comparePassword(password);

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    const token = await User.JwtGen();

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.status(200).json({
      message: "Login successful",
      User,
      token,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
