const mongoose = require('mongoose');


const NoteSchema = new Schema({
    title: {
        type: String,
        require: true

    },
    description: {
        type: String,
        require: true
    },
    tag: {
        default: "General",
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }


});

module.export = mongoose.model('Notes', NoteSchema);