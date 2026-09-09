const express = require("express");

// Import the createTask function from the controller
const { createTask } = require("../controllers/taskController");

// Create a router to handle task-related routes
const router = express.Router();

// When a POST request comes to this route, run createTask
router.post("/", createTask);

// Export the router so app.js can use it
module.exports = router;