const Task = require("../models/taskmodel");

const createTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json(task);
    } catch (error) {
        next(error);
    }
};

const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();

        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
};

const getTaskById = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

const getTasksByTitle = async (req, res, next) => {
    try {
        const tasks = await Task.find({ title: req.params.title });

        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = { createTask, getTasks, getTaskById, getTasksByTitle, updateTask, deleteTask };