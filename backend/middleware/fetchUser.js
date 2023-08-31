const jwt = require('jsonwebtoken')
const JWT_SECRET = 'Harryisagood$boy'


const fetchuser = (req, res, next) => {

    // Get the user from the jwt token and add id
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = string.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }

}

module.exports = fetchuser
