const {Router} = require('express');
const { register, login } = require('../controllers/userController');

const router = Router();

//post del user register
router.post('/register', register);
//post del user login
router.post('/login', login);


module.exports = router;