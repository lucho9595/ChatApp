"use strict";

var User = require("../model/user");

var bcrypt = require("bcrypt"); //registro


function register(req, res, next) {
  var _req$body, img, name, email, password, nameCheck, emailCheck, cryptPassword, user;

  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, img = _req$body.img, name = _req$body.name, email = _req$body.email, password = _req$body.password; //Chequeamos que no exista el nombre

          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            name: name
          }));

        case 4:
          nameCheck = _context.sent;

          if (!nameCheck) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.json({
            msg: "Name already used",
            status: false
          }));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 9:
          emailCheck = _context.sent;

          if (!emailCheck) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", res.json({
            msg: "Email already used",
            status: false
          }));

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 14:
          cryptPassword = _context.sent;
          _context.next = 17;
          return regeneratorRuntime.awrap(User.create({
            img: img,
            email: email,
            name: name,
            password: cryptPassword
          }));

        case 17:
          user = _context.sent;
          delete user.password;
          console.log(user);
          return _context.abrupt("return", res.json({
            msg: "User Created",
            status: true,
            user: user
          }));

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](0);
          next("El error es aca en el register:", _context.t0);

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 23]]);
} //logueo


function login(req, res, next) {
  var _req$body2, name, password, user, isPasswordValid;

  return regeneratorRuntime.async(function login$(_context2) {
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
          console.log(user);
          return _context2.abrupt("return", res.json({
            msg: "User login",
            status: true,
            user: user
          }));

        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](0);
          next("El error es aca en el login:", _context2.t0);

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 17]]);
} //busco uno por id


function getAllUser(req, res, next) {
  var id, users;
  return regeneratorRuntime.async(function getAllUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            id: id
          }).select(["email", "name", "img", "id"]));

        case 4:
          users = _context3.sent;
          console.log(users);
          return _context3.abrupt("return", res.json(users));

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
} //busco a todos


function getAllUsers(req, res, next) {
  var users;
  return regeneratorRuntime.async(function getAllUsers$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(User.find({
            id: req.params.id
          }).select(["email", "name", "img", "id"]));

        case 3:
          users = _context4.sent;
          console.log(users);
          return _context4.abrupt("return", res.json(users));

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
} //actualizo el usuario


function upDateUser(req, res, next) {
  var _req$body3, id, name, email, password, img, imgId, user, newCryptPassword, nuevoUser;

  return regeneratorRuntime.async(function upDateUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body3 = req.body, id = _req$body3.id, name = _req$body3.name, email = _req$body3.email, password = _req$body3.password, img = _req$body3.img, imgId = _req$body3.imgId;
          _context5.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            where: {
              id: id
            }
          }));

        case 4:
          user = _context5.sent;
          if (!user) res.status(404).json({
            msg: "user not found..."
          });

          if (!name) {
            _context5.next = 9;
            break;
          }

          _context5.next = 9;
          return regeneratorRuntime.awrap(User.update({
            name: name
          }, {
            where: {
              id: id
            }
          }));

        case 9:
          if (!email) {
            _context5.next = 12;
            break;
          }

          _context5.next = 12;
          return regeneratorRuntime.awrap(User.update({
            email: email
          }, {
            where: {
              id: id
            }
          }));

        case 12:
          if (!password) {
            _context5.next = 18;
            break;
          }

          _context5.next = 15;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 15:
          newCryptPassword = _context5.sent;
          _context5.next = 18;
          return regeneratorRuntime.awrap(User.update({
            password: newCryptPassword
          }, {
            where: {
              id: id
            }
          }));

        case 18:
          if (!img) {
            _context5.next = 21;
            break;
          }

          _context5.next = 21;
          return regeneratorRuntime.awrap(User.update({
            img: img,
            imgId: imgId
          }, {
            where: {
              id: id
            }
          }));

        case 21:
          _context5.next = 23;
          return regeneratorRuntime.awrap(User.findOne({
            where: {
              id: id
            }
          }));

        case 23:
          nuevoUser = _context5.sent;
          console.log(nuevoUser);
          res.status(200).json(nuevoUser);
          _context5.next = 31;
          break;

        case 28:
          _context5.prev = 28;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);

        case 31:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 28]]);
} //borro el usuario


module.exports = {
  register: register,
  upDateUser: upDateUser,
  login: login,
  getAllUsers: getAllUsers,
  getAllUser: getAllUser
};