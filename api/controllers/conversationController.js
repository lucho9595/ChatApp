const Conversations = require("../model/Conversations");

//agrego conversaciones
async function addConversation(req, res, next) {
    const newConversation = new Conversations({
        members: [req.body.senderId, req.body.receiverId]
    })

    try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    } catch (error) {
        next(error)
    }
};

//busco todos los mensajes
async function getAllConver(req, res, next) {
    try {
        const data = await Conversations.find();
        if (!data) { res.json({ msg: "Conversation not found", status: false }) }
        res.json({ data })
    } catch (error) {
        next(error);
    }
};

//busco conversaciones de algunos usuarios
async function getConv(req, res, next) {
    try {
        const conversation = await Conversations.find({
            members: { $in: [req.params.userId] },
        })
        res.status(200).json(conversation)
    } catch (error) {
        next(error)
    }
};


module.exports = {
    addConversation,
    getAllConver,
    getConv
};