const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes')


// route 1 : get all notes using Get "/api/auth/getuser"

router.get('/fetchallnotes', fetchuser, (req, res) => {

    res.json([])

})
module.exports = router