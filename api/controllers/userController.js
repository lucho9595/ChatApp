const User = require("../model/User");
const bcrypt = require("bcrypt");

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
  updateUser,
  getAllUsers,
  getUser,
  deleteUser
};