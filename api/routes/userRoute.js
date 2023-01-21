const {Router} = require('express');
const { register } = require('../controllers/userController');

const router = Router();

//post del user
router.post('/register', register);

module.exports = router;