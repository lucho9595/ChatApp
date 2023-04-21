const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGO_URL
  ? process.env.MONGO_URL
  : "mongodb://localhost/databasetest";

mongoose.set("strictQuery", false);

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is connected");
});
