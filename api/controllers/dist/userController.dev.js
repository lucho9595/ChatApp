"use strict";

var User = require("../model/user");

var bcrypt = require("bcrypt");

module.exports.register = function _callee(req, res, next) {
  var _req$body, img, name, email, password, imgCheck, nameCheck, emailCheck, cryptPassword, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, img = _req$body.img, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            img: img
          }));

        case 4:
          imgCheck = _context.sent;

          if (!imgCheck) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.json({
            msg: "img already used",
            status: false
          }));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(User.findOne({
            name: name
          }));

        case 9:
          nameCheck = _context.sent;

          if (!nameCheck) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", res.json({
            msg: "Name already used",
            status: false
          }));

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 14:
          emailCheck = _context.sent;

          if (!emailCheck) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", res.json({
            msg: "Email already used",
            status: false
          }));

        case 17:
          _context.next = 19;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 19:
          cryptPassword = _context.sent;
          _context.next = 22;
          return regeneratorRuntime.awrap(User.create({
            img: img,
            email: email,
            name: name,
            password: cryptPassword
          }));

        case 22:
          user = _context.sent;
          delete user.password;
          return _context.abrupt("return", res.json({
            status: true,
            user: user
          }));

        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](0);
          next("El error es aca en el register:", _context.t0);

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 27]]);
};

module.exports.login = function _callee2(req, res, next) {
  var _req$body2, name, password, user, isPasswordValid;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, name = _req$body2.name, password = _req$body2.password; //Chequeamos si existe el nombre

          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            name: name
          }));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.json({
            msg: "Incorrect name or password",
            status: false
          }));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 9:
          isPasswordValid = _context2.sent;

          if (isPasswordValid) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("return", res.json({
            msg: "Incorrect name or password",
            status: false
          }));

        case 12:
          delete user.password;
          return _context2.abrupt("return", res.json({
            status: true,
            user: user
          }));

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](0);
          next("El error es aca en el login:", _context2.t0);

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 16]]);
};

module.exports.getAllUsers = function _callee3(req, res, next) {
  var users;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(User.find({
            id: {
              $ne: req.params.id
            }
          }).select(["email", "name", "img", "id"]));

        case 3:
          users = _context3.sent;
          return _context3.abrupt("return", res.json(users));

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};