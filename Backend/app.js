const express = require("express");
const cors = require("cors");
const CookieParser = require("cookie-parser");
const app = express();

const ConnectToDb = require("./config/db");
ConnectToDb();

const USerRouter = require("./routes/user.route");
const TemplateRouter = require("./routes/template.route");
const ImageRouter = require("./routes/image.route");



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
app.use("/template", TemplateRouter);
app.use("/image", ImageRouter);

module.exports = app;
