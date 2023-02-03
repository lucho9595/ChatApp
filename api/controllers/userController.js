const User = require("../model/user");
const bcrypt = require("bcrypt");

//registro
async function register(req, res, next) {
  try {
    const {img, name, email, password } = req.body;
    //Chequeamos que no exista el nombre
    const nameCheck = await User.findOne({name});
    if (nameCheck) {return res.json({msg: "Name already used",status:false });}
    //Chequeamos que no exista el email
    const emailCheck = await User.findOne({email});
    if (emailCheck) {
      return res.json({ msg: "Email already used",status:false });
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
    console.log(user);
    return res.json({msg: "User Created",status:true, user});
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
    console.log(user);
    return res.json({msg: "User login",status: true, user});
  } catch (err) {
    next("El error es aca en el login:", err);
  }
}

//busco uno por id
async function getAllUser(req, res, next) {
  try {
    const {id} = req.params.id
    const users = await User.findOne({ id }).select([
      "email",
      "name",
      "img",
      "id"
    ]);
    console.log(users);
    return res.json(users);
  } catch (error) {
    next(error);
  }

}

//busco a todos
async function getAllUsers(req, res, next) {
  try {
    const users = await User.find({ id: req.params.id }).select([
      "email",
      "name",
      "img",
      "id"
    ]);
    console.log(users);
    return res.json(users);
  } catch (error) {
    next(error);
  }
}

//actualizo el usuario
async function upDateUser(req, res, next) {
  try {
    const {id, name, email, password, img, imgId } = req.body;

    let user = await User.findOne({ where: { id: id } });
    if (!user) res.status(404).json({ msg: "user not found..." });

    if (name) await User.update({ name }, { where: { id: id } });
    if (email) await User.update({ email }, { where: { id: id } });
    if (password) {
    const newCryptPassword = await bcrypt.hash(password, 10);
      await User.update({ password: newCryptPassword }, { where: { id: id } });
    }

    if (img){
        await User.update(
          {
            img,
            imgId
          },
          { where: { id: id } })}
    let nuevoUser = await User.findOne({ where: { id: id } });
    console.log(nuevoUser);
    res.status(200).json(nuevoUser);
  }catch (error) {
    next(error);
  }
}

//borro el usuario


module.exports = {
  register,
  upDateUser,
  login,
  getAllUsers,
  getAllUser
};
