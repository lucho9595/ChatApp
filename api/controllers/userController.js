const User = require("../model/user");
const bcrypt = require("bcrypt");

//registro
async function register(req, res, next) {
  try {
    const { img, name, email, password } = req.body;
    //Chequeamos que no exista el nombre
    const nameCheck = await User.findOne({ name });
    if (nameCheck) { return res.json({ msg: "Name already used", status: false }); }
    //Chequeamos que no exista el email
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "Email already used", status: false });
    }
    //Aca realizamos la encriptacion del password:
    const cryptPassword = await bcrypt.hash(password, 10);
    //creamos el usuario
    const user = await User.create({
      img: img,
      email: email,
      name: name,
      password: cryptPassword
    });
    delete user.password;
    return res.json({ msg: "User Created", status: true });
  } catch (err) {
    next("El error es aca en el register:", err);
  }
}

//logueo
async function login(req, res, next) {
  try {
    const { name, password } = req.body;
    //Chequeamos si existe el nombre
    const user = await User.findOne({
      name
    });
    if (!user) {
      return res.json({
        msg: "Incorrect name or password",
        status: false
      });
    }
    //Aca comparamos que el password que ingresamos es igual al que esta en la base de datos.
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({
        msg: "Incorrect name or password",
        status: false
      });
    }
    delete user.password;
    return res.json({ msg: "User login", status: true });
  } catch (err) {
    next("El error es aca en el login:", err);
  }
}

//busco uno por id
async function getUser(req, res, next) {
  try {
    const users = await User.findById(req.params.id)
    if (!users) { res.json({ msg: "User not found", status: false }) }
    return res.json(users);
  } catch (error) {
    next(error);
  }

}

//busco a todos
async function getAllUsers(req, res, next) {
  try {
    const users = await User.find({ _id: req.params.id })
    if (!users) { res.json({ msg: "User not found", status: false }) }
    return res.json(users);
  } catch (error) {
    next(error);
  }
}

//actualizo el usuario
async function updateUser(req, res, next) {
  try {
    const { name, password, email, img } = req.body;
    //Aca realizamos la encriptacion del password:
    const cryptPassword = await bcrypt.hash(password, 10);
    const updateUser = await User.findOneAndUpdate({ _id: req.params.id }, {
      name: name,
      email: email,
      password: cryptPassword,
      img: img,
    });
    delete updateUser.password;
    res.status(200).json({ msg: 'Updating user', updateUser });
  } catch (error) {
    next(error);
  }
}

//borro el usuario
async function deleteUser(req, res, next) {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id)
    if (!deleteUser) { return res.json({ msg: "User not found", status: false }); }
    res.json({ msg: 'User deleted ', status: true })
  } catch (error) {
    next({ msg: "En deleteUser esta el error:", error })
  }
}

module.exports = {
  register,
  updateUser,
  login,
  getAllUsers,
  getUser,
  deleteUser
};