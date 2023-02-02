"use strict";

var User = require("../model/user");

var bcrypt = require("bcrypt");

function login(req, res, next) {
  var _req$body, name, password, user, isPasswordValid;

  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, password = _req$body.password; //Chequeamos si existe el nombre

          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            name: name
          }));

        case 4:
          user = _context.sent;

          if (user) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.json({
            msg: "Incorrect name or password",
            status: false
          }));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 9:
          isPasswordValid = _context.sent;

          if (isPasswordValid) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", res.json({
            msg: "Incorrect name or password",
            status: false
          }));

        case 12:
          delete user.password;
          console.log(user);
          return _context.abrupt("return", res.json({
            status: true,
            user: user
          }));

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          next("El error es aca en el login:", _context.t0);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 17]]);
}

;

function getAllUsers(req, res, next) {
  var users;
  return regeneratorRuntime.async(function getAllUsers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.find({
            id: {
              $ne: req.params.id
            }
          }).select(["email", "name", "img", "id"]));

        case 3:
          users = _context2.sent;
          console.log(users);
          return _context2.abrupt("return", res.json(users));

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

;

function upDateUser(req, res, next) {
  var id, _req$body2, name, email, password, img, imgId, user, newPassword, nuevoUser;

  return regeneratorRuntime.async(function upDateUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, password = _req$body2.password, img = _req$body2.img, imgId = _req$body2.imgId;
          if (!id) res.status(404).json({
            msg: 'id is require...'
          });
          _context3.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            where: {
              id: id
            }
          }));

        case 6:
          user = _context3.sent;
          if (!user) res.status(404).json({
            msg: 'user not found...'
          });

          if (!username) {
            _context3.next = 11;
            break;
          }

          _context3.next = 11;
          return regeneratorRuntime.awrap(User.update({
            name: name
          }, {
            where: {
              id: id
            }
          }));

        case 11:
          if (!email) {
            _context3.next = 14;
            break;
          }

          _context3.next = 14;
          return regeneratorRuntime.awrap(User.update({
            email: email
          }, {
            where: {
              id: id
            }
          }));

        case 14:
          if (!password) {
            _context3.next = 20;
            break;
          }

          _context3.next = 17;
          return regeneratorRuntime.awrap(encrypt(password));

        case 17:
          newPassword = _context3.sent;
          _context3.next = 20;
          return regeneratorRuntime.awrap(User.update({
            password: newPassword
          }, {
            where: {
              id: id
            }
          }));

        case 20:
          if (!img) {
            _context3.next = 30;
            break;
          }

          if (!user.img) {
            _context3.next = 28;
            break;
          }

          _context3.next = 24;
          return regeneratorRuntime.awrap(deleteImage(user.imgId));

        case 24:
          _context3.next = 26;
          return regeneratorRuntime.awrap(User.update({
            img: img,
            imgId: imgId
          }, {
            where: {
              id: id
            }
          }));

        case 26:
          _context3.next = 30;
          break;

        case 28:
          _context3.next = 30;
          return regeneratorRuntime.awrap(User.update({
            img: img,
            imgId: imgId
          }, {
            where: {
              id: id
            }
          }));

        case 30:
          _context3.next = 32;
          return regeneratorRuntime.awrap(User.findOne({
            where: {
              id: id
            }
          }));

        case 32:
          nuevoUser = _context3.sent;
          console.log(nuevoUser);
          res.status(200).json(nuevoUser);
          _context3.next = 40;
          break;

        case 37:
          _context3.prev = 37;
          _context3.t0 = _context3["catch"](0);
          next("El error es en upDateUser ," + _context3.t0);

        case 40:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 37]]);
}

;
module.exports = {
  upDateUser: upDateUser,
  login: login,
  getAllUsers: getAllUsers
};