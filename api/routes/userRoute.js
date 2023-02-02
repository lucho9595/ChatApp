const {Router} = require('express');
const { register, login, getAllUsers, upDateUser} = require('../controllers/userController');
const User = require("../model/user");
const bcrypt = require("bcrypt");

const router = Router();

//post del user register
router.post('/register',async (req, res) =>{
    {
  try {
    const { img, name, email, password } = req.body;
    const imgCheck = await User.findOne({
      img
    });
    if (imgCheck) {
      return res.json({
        msg: "img already used"
      });
    }
    //Chequeamos que no exista el nombre
    const nameCheck = await User.findOne({
      name
    });
    if (nameCheck) {
      return res.json({
        msg: "Name already used"
      });
    }
    //Chequeamos que no exista el email
    const emailCheck = await User.findOne({
      email
    });
    if (emailCheck) {
      return res.json({ msg: "Email already used"});
    }
    //Aca realizamos la encriptacion del password:
    const cryptPassword = await bcrypt.hash(password, 10);
    //creamos el usuario
    const user = await User.create({
      img,
      email,
      name,
      password: cryptPassword
    });
    delete user.password;
    console.log(user)
    return user;
  } catch (err) {
    console.log("El error es aca en el register:", err);
  }
};
});
//post del user login
router.post('/login', login);
//obtener todos lo usuarios:
router.get('/allusers/:id', getAllUsers);
//modificar el usuario:
router.put('/editUser/:id', upDateUser);

module.exports = router;