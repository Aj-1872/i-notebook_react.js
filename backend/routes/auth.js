const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator')

//create a USer using : POST "/api/auth/". does not require Auth

router.post('/', [
    body('name', 'enter valid name').isLength({ min: 3 }),
    body('email', 'enter valid email').isEmail(),
    body('password', 'enter valid password').isLength({ min: 5 }),



], (req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user))
        .catch(err => {
            consol.log(err)
            res.json({ error: "enter the valid value" })
        })

    // res.json(obj) 
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();


})
module.exports = router