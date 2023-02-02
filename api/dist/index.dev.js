"use strict";

var express = require("express");

var cors = require("cors");

var mongoose = require("mongoose");

var userRoutes = require("./routes/userRoute");

var app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json()); //aca decimos que  utilize las rutas de userRoute

app.use('/api/auth', userRoutes);
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Connected to MongoDB" + " alfin");
})["catch"](function (err) {
  console.log("Not Connected to Database ERROR! ", err);
}); //hago que el servidor escuche al puerto tipeado en .env

var server = app.listen(process.env.PORT, function () {
  console.log("Server Started on Port ".concat(process.env.PORT));
});
module.exports = server;