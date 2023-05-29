const { Router } = require("express");

const {
    addConversation,
    getAllConver,
    getConv
} = require("../controllers/conversationController");

const router = Router();

//post del agregar conversaciones a la base de datos
router.route("/newConv").post(addConversation);
//get de obtener conversaciones de algunos usuarios
router.route("/getConv/:userId").get(getConv)
//get de obtener todas las conversaciones
router.route("/getConv").get(getAllConver)


module.exports = router;
