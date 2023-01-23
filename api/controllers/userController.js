const User = require('../model/user');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res, next) => {
    try {
        const {
            img,
            name,
            email,
            password
        } = req.body;
        const imgCheck = await User.findOne({
            img
        });
        if (imgCheck){
            return res.json({
                msg: "img already used",
                status: false,
            })
        }
        //Chequeamos que no exista el nombre
        const nameCheck = await User.findOne({
            name
        });
        if (nameCheck) {
            return res.json({
                msg: "Name already used",
                status: false
            });
        };
        //Chequeamos que no exista el email
        const emailCheck = await User.findOne({
            email
        });
        if (emailCheck) {
            return res.json({
                msg: "Email already used",
                status: false
            });
        };
        //Aca realizamos la encriptacion del password:
        const cryptPassword = await bcrypt.hash(password, 10);
        //creamos el usuario
        const user = await User.create({
            img,
            email,
            name,
            password: cryptPassword,
        });
        delete user.password;
        return res.json({
            status: true,
            user
        });
    } catch (err) {
        next("El error es aca en el register:", err)
    }
};

module.exports.login = async (req, res, next) => {
    try {
        const {
            name,
            password
        } = req.body;
        //Chequeamos si existe el nombre
        const user = await User.findOne({
            name
        });
        if (!user) {
            return res.json({
                msg: "Incorrect name or password",
                status: false
            });
        };
        //Aca comparamos que el password que ingresamos es igual al que esta en la base de datos.
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({
                msg: "Incorrect name or password",
                status: false
            });
        };
        delete user.password;
        return res.json({
            status: true,
            user
        });
    } catch (err) {
        next("El error es aca en el login:", err)
    }
};