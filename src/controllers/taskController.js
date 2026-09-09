const Task = require("../models/taskmodel");

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createTask };