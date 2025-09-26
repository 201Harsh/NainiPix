const express = require("express");
const cors = require("cors");
const CookieParser = require("cookie-parser");
const app = express();

const ConnectToDb = require("./config/db");
ConnectToDb();

const USerRouter = require("./routes/user.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(CookieParser());

app.use("/users", USerRouter);

module.exports = app;
