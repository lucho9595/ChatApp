"use strict";

var User = require("../model/user");

var bcrypt = require("bcrypt"); //registro


function register(req, res, next) {
  var _req$body, img, name, email, password, imgCheck, nameCheck, emailCheck, cryptPassword, user;

  return regeneratorRuntime.async(function register$(_context) {
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
            msg: "img already used"
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
            msg: "Name already used"
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
            msg: "Email already used"
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
          console.log(user);
          return _context.abrupt("return", user);

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](0);
          console.log("El error es aca en el register:", _context.t0);

        case 31:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 28]]);
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
  var _id, users;

  return regeneratorRuntime.async(function getAllUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _id = req.params.id.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            id: _id
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
  var _req$body3, name, email, password, img, imgId, user, newPassword, nuevoUser;

  return regeneratorRuntime.async(function upDateUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body3 = req.body, name = _req$body3.name, email = _req$body3.email, password = _req$body3.password, img = _req$body3.img, imgId = _req$body3.imgId;
          if (!id) res.status(404).json({
            msg: "id is require..."
          });
          _context5.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            where: {
              id: id
            }
          }));

        case 5:
          user = _context5.sent;
          if (!user) res.status(404).json({
            msg: "user not found..."
          });

          if (!username) {
            _context5.next = 10;
            break;
          }

          _context5.next = 10;
          return regeneratorRuntime.awrap(User.update({
            name: name
          }, {
            where: {
              id: id
            }
          }));

        case 10:
          if (!email) {
            _context5.next = 13;
            break;
          }

          _context5.next = 13;
          return regeneratorRuntime.awrap(User.update({
            email: email
          }, {
            where: {
              id: id
            }
          }));

        case 13:
          if (!password) {
            _context5.next = 19;
            break;
          }

          _context5.next = 16;
          return regeneratorRuntime.awrap(encrypt(password));

        case 16:
          newPassword = _context5.sent;
          _context5.next = 19;
          return regeneratorRuntime.awrap(User.update({
            password: newPassword
          }, {
            where: {
              id: id
            }
          }));

        case 19:
          if (!img) {
            _context5.next = 29;
            break;
          }

          if (!user.img) {
            _context5.next = 27;
            break;
          }

          _context5.next = 23;
          return regeneratorRuntime.awrap(deleteImage(user.imgId));

        case 23:
          _context5.next = 25;
          return regeneratorRuntime.awrap(User.update({
            img: img,
            imgId: imgId
          }, {
            where: {
              id: id
            }
          }));

        case 25:
          _context5.next = 29;
          break;

        case 27:
          _context5.next = 29;
          return regeneratorRuntime.awrap(User.update({
            img: img,
            imgId: imgId
          }, {
            where: {
              id: id
            }
          }));

        case 29:
          _context5.next = 31;
          return regeneratorRuntime.awrap(User.findOne({
            where: {
              id: id
            }
          }));

        case 31:
          nuevoUser = _context5.sent;
          console.log(nuevoUser);
          res.status(200).json(nuevoUser);
          _context5.next = 39;
          break;

        case 36:
          _context5.prev = 36;
          _context5.t0 = _context5["catch"](0);
          next("El error es en upDateUser ," + _context5.t0);

        case 39:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 36]]);
} //borro el usuario


module.exports = {
  register: register,
  upDateUser: upDateUser,
  login: login,
  getAllUsers: getAllUsers,
  getAllUser: getAllUser
};