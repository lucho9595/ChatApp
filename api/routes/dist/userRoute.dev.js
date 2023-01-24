"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controllers/userController'),
    register = _require2.register,
    login = _require2.login,
    getAllUsers = _require2.getAllUsers;

var router = Router(); //post del user register

router.post('/register', register); //post del user login

router.post('/login', login); //obtener todos lo usuarios:

router.get('/allusers/:id', getAllUsers);
module.exports = router;