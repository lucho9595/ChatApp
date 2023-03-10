const User = require("../model/User");
const bcrypt = require("bcrypt");

//busco uno por id
async function getUser(req, res, next) {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId)
    if (!user) { res.json({ msg: 'User not found', status: false }) }
    res.status(200).json({ status: true, user });
  } catch (error) {
    next(error);
  }

}

//busco a todos
async function getAllUsers(req, res, next) {
  try {
    const data = await User.find();
    if (!data) { res.json({ msg: "Users not founc", status: false }) }
    res.json({ data })
  } catch (error) {
    next(error);
  }
}

//actualizo el usuario
async function updateUser(req, res, next) {
  const id = req.params.id;
  const { username, email, img, password } = req.body
  try {
    const salt = await bcrypt.genSalt(10)

    const cryptPassword = await bcrypt.hash(password, salt);

    const newUserData = {
      username,
      email,
      img,
      password: cryptPassword,
    };

    const user = await User.findByIdAndUpdate(id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false
    })

    console.log(user)
    res.json(user);
  } catch (error) {
    next(error);
  }
}

//borro el usuario
async function deleteUser(req, res, next) {
  if (req.params.id) {
    try {
      const deleteUser = await User.findByIdAndDelete(req.params.id)
      res.json({ msg: 'User deleted ', status: true, deleteUser })
    } catch (error) {
      next({ msg: "En deleteUser esta el error:", error })
    }
  } return res.status(403).json("You can delete only your account!");
}

module.exports = {
  updateUser,
  getAllUsers,
  getUser,
  deleteUser
};