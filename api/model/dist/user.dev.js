"use strict";

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 50,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 8
  },
  //es la imagen que va a elejir la persona, es booleano por que dependiendo al principio en el registro
  //no va a poder seleccionar imagen, luego si.
  img: {
    type: String
  },
  imgId: {
    type: String
  }
});
module.exports = mongoose.model("Users", userSchema);