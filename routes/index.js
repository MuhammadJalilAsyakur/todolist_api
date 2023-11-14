const express = require('express');
const router = express.Router();

const UserRoute = require('./user_route')
const todoRoute = require('./todo_route')
const authRoute = require('./auth_route');
const verifyToken = require('../middleware/auth');

router.get("/", (req, res) => {
    res.json("INI DARI MASA DEPAN")
})

router.use("/auth", authRoute);
router.use("/users", UserRoute);
router.use("/todos", verifyToken, todoRoute);


module.exports = router;