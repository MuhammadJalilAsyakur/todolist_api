const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = {
    login: async (req, res) => {

        try {
            const userLogin = req.body;


            const user = await User.findOne({ email: userLogin.email });
            if (!user) throw new Error("Email not found");

            const isValidPassword = bcrypt.compareSync(userLogin.password, user.password);

            if (!isValidPassword) throw new Error("Password not match");

            const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);
            res.json({
                message: "success login",
                token: token,
                userID: user._id
            });
        } catch (error) {
            res.json({
                message: error.message
            });
        }

    },

    registes: async (req, res) => {
        let data = req.body;

        let saltRound = 10
        let hashPassword = bcrypt.hashSync(data.password, saltRound);

        data.password = hashPassword;

        let user = new User({
            name: data.name,
            email: data.email,
            password: hashPassword
        });


        try {
            await user.save();
            res.json({
                message: "success register",
                data: user
            });
        } catch (error) {
            res.json({
                message: error.message
            });
        }
    }
}
