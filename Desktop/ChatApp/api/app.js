const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoute");
const app = express();
require("dotenv").config();

//aca tomamos el puerto del servidor, settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());//permite que 2 servidores intercambien datos entre ellos
app.use(express.json());

//aca decimos que  utilize las rutas de userRoute
app.use("/api", userRoutes);


module.exports = app;