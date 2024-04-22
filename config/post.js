const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Body: {
        type: String,
        required: true
    },
    created_by: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        default: "Active",
    },
    location: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("post", userschema);
