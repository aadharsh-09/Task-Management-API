# Task Management API

A simple REST API for managing tasks using Node.js, Express.js and MongoDB.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman

## Features

* Create a task
* Get all tasks
* Get a task by ID
* Get tasks by title
* Update a task
* Delete a task
* Input validation
* Centralized error handling

## Task Fields

* `title` - Task title
* `description` - Task description
* `status` - `"pending"`, `"in-progress"`, or `"completed"`
* `dueDate` - Task due date

## API Endpoints

| Method | Endpoint                  | Description        |
| ------ | ------------------------- | ------------------ |
| POST   | `/api/tasks`              | Create a new task  |
| GET    | `/api/tasks`              | Get all tasks      |
| GET    | `/api/tasks/:id`          | Get a task by ID   |
| GET    | `/api/tasks/title/:title` | Get tasks by title |
| PUT    | `/api/tasks/:id`          | Update a task      |
| DELETE | `/api/tasks/:id`          | Delete a task      |

## Error Handling

The API validates task data using Mongoose. Examples of handled errors include:

* Missing required fields
* Invalid status values
* Invalid task IDs
* Task not found
* Unexpected server errors

Validation errors return a `400` status code with details about the invalid fields.

## Running the Project

### 1. Install dependencies

```bash
npm install
```

### 2. Create a `.env` file

Create a `.env` file in the project root and add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 3. Start the server

```bash
node src/app.js
```

The API will run on:

```text
http://localhost:3000
```

## Postman

A Postman collection containing all the API endpoints is included in:

```text
postman_collection.json
```

The collection can be imported into Postman to test the API.

## Status Codes

* `200` - Request successful
* `201` - Resource created
* `400` - Invalid request or validation error
* `404` - Task not found
* `500` - Server error
