const Message = require("../model/Message");

//agrego mensajes
async function addMsg(req, res, next) {
    const newMessage = new Message(req.body);

    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (error) {
        next(error)
    }
}

//busco algunos mensaje de algun usuario
async function getMsg(req, res, next) {
    try {
        const message = await Message.find({
            conversationId: req.params.conversationId
        })
        res.status(200).json(message);
    } catch (error) {
        next(error)
    }
}

//busco todos los mensajes
async function getAllMsg(req, res, next) {
    try {
        const data = await Message.find();
        if (!data) { res.json({ msg: "Message not found", status: false }) }
        res.json({ data })
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addMsg,
    getMsg,
    getAllMsg
};