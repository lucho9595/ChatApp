"use strict";

var app = require("./app"); //con esto decimos que directamente corra el codigo echo en database.js


require('./database'); //hago que el servidor escuche al puerto tipeado en .env


function run() {
  return regeneratorRuntime.async(function run$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(app.listen(app.get('port')));

        case 2:
          console.log("Server Started on Port ", app.get('port'));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

run();