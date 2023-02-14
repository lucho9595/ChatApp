const User = require("../model/User");
const bcrypt = require("bcrypt");

//registro
async function register(req, res, next) {
  try {
    console.log(req.body)
    const cryptPassword = await bcrypt.hash(req.body.password, 10);

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
    if (!user.username) {
      return res.json({
        msg: "Incorrect username",
        status: false
      });
    }
    //Aca comparamos que el password que ingresamos es igual al que esta en la base de datos.
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({
        msg: "Incorrect password",
        status: false
      });
    }
    console.log(user)
    return res.json({ user });
  } catch (err) {
    next("El error es aca en el login:", err);
  }
}

module.exports = {
  register,
  login,
};