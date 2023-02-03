"use strict";

var express = require("express");

var cors = require("cors");

var userRoutes = require("./routes/userRoute");

var app = express();

require("dotenv").config(); //aca tomamos el puerto del servidor, settings


app.set('port', process.env.PORT || 4000); //middlewares

app.use(cors()); //permite que 2 servidores intercambien datos entre ellos

app.use(express.json()); //aca decimos que  utilize las rutas de userRoute

app.use("/", userRoutes);
module.exports = app;