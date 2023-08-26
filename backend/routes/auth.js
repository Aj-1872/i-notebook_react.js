const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator')

//create a USer using : POST "/api/auth/createuser". No login needed

router.post('/createuser', [
    body('name', 'enter valid name').isLength({ min: 3 }),
    body('email', 'enter valid email').isEmail(),
    body('password', 'enter valid password').isLength({ min: 5 }),



], async (req, res) => {
    // if there are error return bad req and the error
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    //checking that user with same email is already exists
    try {

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "sorry a user with this email already exist" })
        }
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
    } catch (error) {
        console.log(error)
    }
    // .then(user => res.json(user))
    //     .catch(err => {
    //         consol.log(err)
    //         res.json({ error: "enter the valid value" })
    //     })

    // res.json(obj) 
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();


})
module.exports = router