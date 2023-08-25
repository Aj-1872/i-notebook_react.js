const mongoose = require('mongoose');
const { Schema } = mongoose;

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

const User = mongoose.model('user', UserSchema);
User.createIndexes();
module.exports = User;
