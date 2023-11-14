const express = require("express");
const router = express.Router();

const {
    getAllTodo,
    getTodoById,
    createTodo,
    deleteTodo,
} = require("../controller/todo_controller");
const verifyToken = require("../middleware/auth");

router.get("/", verifyToken, getAllTodo);
router.post("/", createTodo);
router.get("/:id", verifyToken, getTodoById);
router.delete("/", deleteTodo);

module.exports = router;