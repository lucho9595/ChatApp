"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/userController'),
    register = _require2.register,
    login = _require2.login,
    getAllUsers = _require2.getAllUsers,
    upDateUser = _require2.upDateUser;

var User = require("../model/user");

var bcrypt = require("bcrypt");

var router = Router(); //post del user register

router.post('/register', function _callee(req, res) {
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
          ;

        case 32:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 28]]);
}); //post del user login

router.post('/login', login); //obtener todos lo usuarios:

router.get('/allusers/:id', getAllUsers); //modificar el usuario:

router.put('/editUser/:id', upDateUser);
module.exports = router;