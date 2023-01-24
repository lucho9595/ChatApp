const {Router} = require('express');
const { register, login, getAllUsers} = require('../controllers/userController');

const router = Router();

//post del user register
router.post('/register', register);
//post del user login
router.post('/login', login);
//obtener todos lo usuarios:
router.get('/allusers/:id', getAllUsers);

module.exports = router;