const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: String,
    },
    message: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Messages", messageSchema);