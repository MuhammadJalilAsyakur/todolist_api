const express = require("express");
const router = express.Router();

const {
    getAllUser,
    getUserById,
    createUser,
    deleteUser,
    getUserTodos,
    updateUser,
} = require("../controller/user_controller");
const verifyToken = require("../middleware/auth");

router.get("/", getAllUser);
router.get("/:id/todo", verifyToken, getUserTodos);
router.get("/:id", verifyToken, getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.post("/:id/update", verifyToken, updateUser);


module.exports = router;