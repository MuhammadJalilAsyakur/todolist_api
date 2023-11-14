const express = require("express");
const router = express.Router();

const {
    getAllTodo,
    getTodoById,
    createTodo,
    deleteTodo,
    updateTodoById,
} = require("../controller/todo_controller");
const verifyToken = require("../middleware/auth");

router.get("/", verifyToken, getAllTodo);
router.post("/", createTodo);
router.get("/:id", verifyToken, getTodoById);
router.delete("/", deleteTodo);
router.post("/:id/update", verifyToken, updateTodoById);

module.exports = router;