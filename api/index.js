const app = require("./app");
//con esto decimos que directamente corra el codigo echo en database.js
require('./database')

//hago que el servidor escuche al puerto tipeado en .env
async function run() {
  await app.listen(app.get('port'));
  console.log(`Server Started on Port `, app.get('port'));
}

run();
