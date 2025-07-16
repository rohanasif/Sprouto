# Task Management API Documentation

This API allows users to create, read, update, and delete tasks. Built with Node.js, Express, and MongoDB.

## Base URL

`/api/tasks`

## Endpoints

### 1. Create a Task

- **URL:** `POST /api/tasks`
- **Body:**
  ```json
  {
    "title": "Task Title",
    "description": "Task description",
    "status": "pending" // or "completed" (optional)
  }
  ```
- **Response:**
  ```json
  {
    "_id": "...",
    "title": "...",
    "description": "...",
    "status": "pending",
    "createdAt": "..."
  }
  ```

### 2. Get All Tasks

- **URL:** `GET /api/tasks`
- **Response:**
  ```json
  [
    {
      "_id": "...",
      "title": "...",
      "description": "...",
      "status": "pending",
      "createdAt": "..."
    }
    // ...more tasks
  ]
  ```

### 3. Get a Single Task

- **URL:** `GET /api/tasks/:id`
- **Response:**
  ```json
  {
    "_id": "...",
    "title": "...",
    "description": "...",
    "status": "pending",
    "createdAt": "..."
  }
  ```

### 4. Update a Task

- **URL:** `PUT /api/tasks/:id`
- **Body:**
  ```json
  {
    "title": "Updated Title",
    "description": "Updated description",
    "status": "completed"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "...",
    "title": "...",
    "description": "...",
    "status": "completed",
    "createdAt": "..."
  }
  ```

### 5. Delete a Task

- **URL:** `DELETE /api/tasks/:id`
- **Response:**
  ```json
  {
    "message": "Task deleted"
  }
  ```

## Error Handling

- Errors return JSON with a `message` field and appropriate HTTP status code.

## Task Model

- `title` (String, required)
- `description` (String)
- `status` ("pending" or "completed", default: "pending")
- `createdAt` (Date)

## Setup

1. Set your MongoDB URI in `.env` as `MONGO_URI=your_mongodb_uri`.
2. Run `npm install`.
3. Start server: `npm run dev` (if using nodemon) or `node server.js`.

---

For questions or issues, contact the repository owner.
