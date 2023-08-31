const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryisagood$boy';

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id
    const token = req.header('authToken'); // Using 'authToken' as the header name

    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user; // Corrected assignment
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
};

module.exports = fetchuser;
