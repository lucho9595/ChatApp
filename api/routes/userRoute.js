const { Router } = require("express");
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");
const {  register,
  login,
} = require("../controllers/auth");
const router = Router();

//post del user register
router.route("/users").post(register);
//post del user login
router.route("/login").post(login)
//obtener todos lo usuarios:
router.route("/users").get(getAllUsers)
//obtener un usuario en especifico:
router.route("/users/:id").get(getUser)
//modificar el usuario:
router.route("/users/:id").put(updateUser)
//eliminar el usuario:
router.route("/delete/:id").delete(deleteUser)

module.exports = router;
