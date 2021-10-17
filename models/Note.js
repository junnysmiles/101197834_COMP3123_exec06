const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = new mongoose.Schema({
    note_title: {
        type: String,
        required: true
    },
    note_description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ["LOW", "MEDIUM", "HIGH"]
    },
    date_added: {
        type: String,
        required: true
    },
    date_updated: String,
})

const Note = mongoose.model("Note", NoteSchema)
module.exports = Note