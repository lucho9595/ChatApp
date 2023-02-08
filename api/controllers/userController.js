const User = require("../model/User");
const bcrypt = require("bcrypt");

//busco uno por id
async function getUser(req, res, next) {
  const userId = req.params.id;
  console.log(userId)
  const username = req.body.username;
  console.log(username)
  try {
    const user = userId
    ? await User.findById(userId)
    : await User.findOne({ username: username });
  res.status(200).json(user);  
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
  if(req.params.id){
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id)
    res.json({ msg: 'User deleted ', status: true })
  } catch (error) {
    next({ msg: "En deleteUser esta el error:", error })
  }
}return res.status(403).json("You can delete only your account!");
}

module.exports = {
  updateUser,
  getAllUsers,
  getUser,
  deleteUser
};