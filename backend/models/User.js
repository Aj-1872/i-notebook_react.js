const mongoose = require('mongoose');


const UserSchema = new Schema({
    name: {
        type: String,
        require: true

    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        require: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }


});

module.exports = mongoose.model('user', UserSchema)