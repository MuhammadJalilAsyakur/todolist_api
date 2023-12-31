const Todo = require('../models/todo');
const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    getAllUser: async (req, res) => {
        const users = await User.find();

        res.json(
            {
                message: "success getting all data",
                data: users
            }
        );
    },

    getUserById: async (req, res) => {
        const { id } = req.params;

        const data = await User.findById(id);

        res.json(
            {
                message: "success getting data by id",
                data: data
            }
        );

    },

    getUserTodos: async (req, res) => {
        const { id } = req.params;

        const data = await Todo.find({ userID: id }).populate('userID', ('name'));

        res.json(
            {
                message: "success getting data by id",
                data: data
            }
        );
    },

    createUser: async (req, res) => {
        let data = req.body;

        await User.create(data);
        res.json(
            {
                message: "success",
                data: data
            }
        );
    },

    deleteUser: async (req, res) => {
        const { id } = req.params;

        const data = await User.findByIdAndDelete(id);

        res.json(
            {
                message: "success deleting data by id",
                data: data
            }
        );
    },

    updateUser: async (req, res) => {
        const { id } = req.params.id;
        const updateData = req.body;

        const data = await User.findOneAndReplace(id, updateData, { new: true })


        if (!data) {
            return res.status(404).json({
                message: "No todo found with this id",
            });
        }

        res.json({
            message: "success updating data",
            data: data
        });
    },
}
