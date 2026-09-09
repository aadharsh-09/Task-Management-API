const express = require("express");
const { createTask, getTasks, getTaskById, getTasksByTitle, updateTask, deleteTask } = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/title/:title", getTasksByTitle);
router.put("/:id", updateTask);
router.get("/:id", getTaskById);
router.delete("/:id", deleteTask);

module.exports = router;