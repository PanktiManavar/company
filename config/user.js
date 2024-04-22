const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    MobileNo: {
        type: Number,
        required: true,
        unique: true
    },
    Status: {
        type: String,
        default: "Active",
    }
});

module.exports = mongoose.model("user", userschema);
