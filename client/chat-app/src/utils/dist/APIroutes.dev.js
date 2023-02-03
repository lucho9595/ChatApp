"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upDateUser = exports.allUsers = exports.loginRouter = exports.registerRouter = void 0;
var host = "http://localhost:4000";
var registerRouter = "".concat(host, "/register");
exports.registerRouter = registerRouter;
var loginRouter = "".concat(host, "/login");
exports.loginRouter = loginRouter;
var allUsers = "".concat(host, "/allusers");
exports.allUsers = allUsers;
var upDateUser = "".concat(host, "/edituser/:id");
exports.upDateUser = upDateUser;