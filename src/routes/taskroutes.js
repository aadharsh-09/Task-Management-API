const express = require("express");
const { createTask, getTasks, getTaskById, getTasksByTitle } = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/title/:title", getTasksByTitle);
router.get("/:id", getTaskById);

module.exports = router;