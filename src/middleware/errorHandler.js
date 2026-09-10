const errorHandler = (error, req, res, next) => {
    if (error.name === "ValidationError") {
        const errors = {};

        for (const field in error.errors) {
            errors[field] = error.errors[field].message;
        }

        return res.status(400).json({
            message: "Validation failed",
            errors
        });
    }

    if (error.name === "CastError") {
        return res.status(400).json({
            message: "Invalid task ID"
        });
    }

    res.status(500).json({
        message: "Server error"
    });
};

module.exports = errorHandler;