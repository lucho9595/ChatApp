const { Router } = require("express");
const {
  register,
  login,
  getAllUsers,
  getAllUser,
  upDateUser,
} = require("../controllers/userController");
const router = Router();

//post del user register
router.route("/register").post(register);
//post del user login
router.route("/login").post(login)
//obtener todos lo usuarios:
router.route("/allusers").get(getAllUsers)
//obtener un usuario en especifico:
router.route("/allusers/:id").get(getAllUser)
//modificar el usuario:
router.route("/edituser/:id").put(upDateUser)

module.exports = router;
