const User = require("../model/User");
const bcrypt = require("bcrypt");

//registro
async function register(req, res, next) {
  try {
    console.log(req.body)
    const salt = await bcrypt.genSalt(10)
    const cryptPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      img: req.body.img,
      username: req.body.username,
      email: req.body.email,
      password: cryptPassword,
    });

    const user = await newUser.save();
    return res.json({ msg: "User Created", status: true, user });
  } catch (err) {
    next(err);
  }
}

//logueo
async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    //Chequeamos si existe el nombre
    const user = await User.findOne({
      username
    });

    if (!user) {
      return res.json({
        msg: "Username Not Found",
        status: false
      });
    }

    //Aca comparamos que el password que ingresamos es igual al que esta en la base de datos.
    const isPasswordValid = bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.json({
        msg: "Incorrect password",
        status: false
      });
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  register,
  login,
};