const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator')



// route 1 : get all notes using Get "/api/auth/getuser"

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while creating the user." });
    }

})
// route 2 : get a new notes using Post "/api/auth/addnote"

router.post('/addnote', fetchuser, [
    body('title', 'enter valid title').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 character').isLength({ min: 5 }),], async (req, res) => {
        try {


            const { title, description, tag } = req.body;
            // if there are error return bad req and the error
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(400).json({ error: error.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const saveNote = await note.save()
            res.json(saveNote)
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "An error occurred while creating the user." });
        }

    })
module.exports = router