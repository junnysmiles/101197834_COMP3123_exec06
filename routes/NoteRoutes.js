const noteModel = require('../models/Note')
const express = require('express')
const app = express()

// Create a new Note
// http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/note', async (req, res) => {
    // Write your code here to save the note
    const note = new noteModel(req.body)

    try {
        await note.save()
        res.send(note)
        console.log("Note Saved.")
        res.status(200).send("Noted Saved.")
    } catch(err) {
        console.log("ERROR: Note Not Saved " + err)
        res.status(500).send(err)
    }
});

// Retrieve all Notes
// http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Write your code here to returns all note
    const notes = await noteModel.find({})

    try {
        res.send(notes)
    } catch (err) {
        console.log("ERROR: " + err)
        res.status(500).send(err)
    }
});

// Retrieve a single Note with noteId
// http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    // Write your code here to return onlt one note using noteid
    try {
        const notesId = await noteModel.findById(req.params.noteId)
        res.send(notesId)
    } catch (err) {
        console.log("ERROR: " + err)
        res.status(500).send(err)
    }
});

// Update a Note with noteId
// http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', (req, res) => {
    // Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
});

module.exports = app