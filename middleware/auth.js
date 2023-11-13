const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (!header) throw new Error("Token tidak ada");

        const token = header.split(" ")[1];
        if (!token) throw new Error("HAHHAHAHA KAMU GK PUNYA TOKEN");

        const user = jwt.verify(token, process.env.JWT_SECRET);

        req.user = user;
        next();

    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
}

module.exports = verifyToken;