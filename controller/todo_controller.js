const Todo = require('../models/todo');
const User = require('../models/user');

module.exports = {
    getAllTodo: async (req, res) => {
        const data = await Todo.find().populate('userID', ('name'));

        res.json(
            {
                message: "success getting all data",
                data: data
            }
        );
    },

    getTodoById: async (req, res) => {
        const { id } = req.params;

        const data = await Todo.find({ userID: id }).populate('userID', 'name');

        if (!data) {
            return res.status(404).json({
                message: "No todo found with this id",
            });
        }

        res.json({
            message: "success getting data by id",
            data: data
        });

    },

    createTodo: async (req, res) => {
        let data = req.body;

        await Todo.create(data);
        res.json(
            {
                message: "success",
                data: data
            }
        );
    },

    deleteTodoById: async (req, res) => {
        const { id } = req.params;


        const data = await Todo.findByIdAndRemove(id);

        res.json(
            {
                message: "success deleting data by id",
                data: data
            }
        );
    },
    updateTodoById: async (req, res) => {
        const { id } = req.params.id;
        const updateData = req.body;

        const data = await Todo.findOneAndReplace(id, updateData, { new: true })


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