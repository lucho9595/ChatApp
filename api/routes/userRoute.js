const { Router } = require("express");
const {
  register,
  login,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");
const router = Router();

//post del user register
router.route("/register").post(register);
//post del user login
router.route("/login").post(login)
//obtener todos lo usuarios:
router.route("/allusers").get(getAllUsers)
//obtener un usuario en especifico:
router.route("/allusers/:id").get(getUser)
//modificar el usuario:
router.route("/edituser/:id").put(updateUser)
//eliminar el usuario:
router.route("/deleteuser/:id").delete(deleteUser)

module.exports = router;
