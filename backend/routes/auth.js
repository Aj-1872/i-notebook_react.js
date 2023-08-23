const express = require('express');
const router = express.Router();
const User = require("../models/User");

//create a USer using : POST "/api/auth/". does not require Auth

router.post('/', (req, res) => {

    // res.json(obj) 
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body);

})
module.exports = router