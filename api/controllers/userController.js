const User = require('../model/user');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res, next) =>{
    try{
        const {name, email, password} = req.body;
        if( !name || !email || !password ){
            res.status(400).send('Not params');
        };
        //Chequeamos que no exista el nombre
        const nameCheck = await User.findOne({name});
        if(nameCheck){
            return res.json({msg: "Name already used", status: false});
        };
        //Chequeamos que no exista el email
        const emailCheck = await User.findOne({email});
        if(emailCheck){
            return res.json({msg: "Email already used", status: false});
        };
        //Aca realizamos la encriptacion del password:
        const cryptPassword = await bcrypt.hash(password, 10);
        //creamos el usuario
        const user = await User.create({
            email,
            name,
            password: cryptPassword,
        });
        delete user.password;
        return res.json({status: true, user}); 
    }catch(err){
        next("El error es aca:", err)
    }
};