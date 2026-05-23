const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    useremail: {
        type: String,
        required: true
    },
    userpassword: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema);