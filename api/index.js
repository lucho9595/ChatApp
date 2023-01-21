const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoute");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

//aca decimos que  utilize las rutas de userRoute
app.use('/api/auth', userRoutes);

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL, { keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB" + " alfin");
  }).catch((err) =>{
    console.log("Not Connected to Database ERROR! ", err);
  });

//hago que el servidor escuche al puerto tipeado en .env
const server = app.listen(process.env.PORT, () =>{
    console.log(`Server Started on Port ${process.env.PORT}`)
})