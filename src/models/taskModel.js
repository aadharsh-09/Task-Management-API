const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is Required"],
        trim: true,
        minlength: [3, "Title must be at least 3 characters long"],
        maxlength: [100, "Title cannot exceed 100 characters"]
    },
    description: {
        type: String,
        default: "",
        trim: true,
        maxlnegth: [500, "Description cannot exceed 500 characters"]
    },
    status: {
        type: String,
        enum: {
            values: ["pending", "in-progress", "completed"],
            message: "Status must be pending, in-progress or completed"
        },
        default: "pending"
    },
    dueDate: {
        type: Date,
        required: [true, "Due date is required"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);