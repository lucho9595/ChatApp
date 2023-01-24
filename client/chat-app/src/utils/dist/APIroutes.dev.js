"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allUsers = exports.loginRouter = exports.registerRouter = void 0;
var host = "http://localhost:5000";
var registerRouter = "".concat(host, "/api/auth/register");
exports.registerRouter = registerRouter;
var loginRouter = "".concat(host, "/api/auth/login");
exports.loginRouter = loginRouter;
var allUsers = "".concat(host, "/api/auth/allusers");
exports.allUsers = allUsers;