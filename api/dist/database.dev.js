"use strict";

var mongoose = require("mongoose");

require("dotenv").config();

var URI = process.env.MONGO_URL ? process.env.MONGO_URL : "mongodb://localhost/databasetest";
mongoose.set("strictQuery", false);
mongoose.connect(URI);
var connection = mongoose.connection;
connection.once("open", function () {
  console.log("DB is connected");
});