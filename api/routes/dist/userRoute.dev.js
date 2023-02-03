"use strict";

var _require = require("express"),
    Router = _require.Router;

var _require2 = require("../controllers/userController"),
    register = _require2.register,
    login = _require2.login,
    getAllUsers = _require2.getAllUsers,
    getAllUser = _require2.getAllUser,
    upDateUser = _require2.upDateUser;

var router = Router(); //post del user register

router.route("/register").post(register); //post del user login

router.route("/login").post(login); //obtener todos lo usuarios:

router.route("/allusers").get(getAllUsers); //obtener un usuario en especifico:

router.route("/allusers/:id").get(getAllUser); //modificar el usuario:

router.route("/editUser/:id").put(upDateUser);
module.exports = router;