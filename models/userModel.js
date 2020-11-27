const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const newUser = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true });


const user = mongoose.model('user', newUser);
module.exports = user;