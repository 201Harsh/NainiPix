const UserModel = require("../models/user.model");
const TempUserModel = require("../models/tempuser.model");

module.exports.createTempUser = async ({ name, email, password, otp }) => {
  if (!name || !email || !password || !otp) {
    throw new Error("All fields are required");
  }

  const iftempuser = await TempUserModel.findOne({ email });

  if (iftempuser) {
    throw new Error("User already exists");
  }
  const ifuser = await UserModel.findOne({ email });

  if (ifuser) {
    throw new Error("User already exists");
  }

  const otpExpiryTime = new Date(Date.now() + 5 * 60 * 1000);

  const tempuser = TempUserModel.create({
    name,
    email,
    password,
    otp,
    otpExpiry: otpExpiryTime,
  });

  return tempuser;
};

module.exports.VerifyOtp = async ({ email, otp }) => {
  if (!email) {
    throw new Error("Email is required");
  }

  if (!otp) {
    throw new Error("OTP is required");
  }

  const tempuser = await TempUserModel.findOne({ email });

  if (!tempuser) {
    throw new Error("User not found");
  }

  const isOtpValid = tempuser.otp === otp;

  if (!isOtpValid) {
    throw new Error("Invalid OTP");
  }

  const otpExpiryTime = tempuser.otpExpiry;

  if (otpExpiryTime < new Date()) {
    throw new Error("OTP has expired");
  }

  const user = await UserModel.create({
    name: tempuser.name,
    email: tempuser.email,
    password: tempuser.password,
  });

  await TempUserModel.deleteOne({ _id: tempuser._id });

  return user;
};