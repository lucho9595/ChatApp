const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 50,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    img: {
        type: String,
        default: "https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-5.jpg",
    },
    imgId: {
        type: String,
        default: "123456789",
    },
},
{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);