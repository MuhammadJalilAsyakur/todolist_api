const express = require("express");
const router = express.Router();

const {
    getAllTodo,
    getTodoById,
    createTodo,
    deleteTodo,
    updateTodoById,
    deleteTodoById,
} = require("../controller/todo_controller");
const verifyToken = require("../middleware/auth");

router.get("/", getAllTodo);
router.post("/", verifyToken, createTodo);
router.get("/:id", verifyToken, getTodoById);
router.delete("/:id", verifyToken, deleteTodoById);
router.post("/update/:id", verifyToken, updateTodoById);

module.exports = router;