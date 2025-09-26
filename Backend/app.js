const express = require("express");
const app = express();

const ConnectToDb = require("./config/db");
ConnectToDb();

const USerRouter = require("./routes/user.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", USerRouter);

module.exports = app;
