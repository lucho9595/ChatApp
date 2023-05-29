const { Router } = require("express");

const {
    addMsg,
    getMsg,
    getAllMsg
} = require("../controllers/messagesController");

const router = Router();

//post del agregar mensaje a la base de datos
router.route("/addMsg").post(addMsg);
//get de obtener algunos mensaje de algun usuario
router.route("/getMsg/:conversationId").get(getMsg)
//get de obtener todos los mensajes
router.route("/getMsg").get(getAllMsg)

module.exports = router;
