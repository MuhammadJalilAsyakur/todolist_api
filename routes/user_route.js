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
router.get("/todo/:id", verifyToken, getUserTodos);
router.get("/:id", verifyToken, getUserById);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.post("/update/:id", verifyToken, updateUser);


module.exports = router;