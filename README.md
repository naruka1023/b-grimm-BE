# Todo List API Server

This is a simple API server built with Express.js that allows you to manage a Todo List. You can perform basic CRUD operations (Create, Read, Update, Delete) on todos with pagination support for retrieving the list.

## Features

- **GET `/todos`**: Retrieve paginated todo items.
- **POST `/todos`**: Add a new todo item.
- **PUT `/todos/:id`**: Update an existing todo item.
- **DELETE `/todos/:id`**: Delete a todo item.

## Requirements

Before running this server, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12.x or later)
- [npm](https://www.npmjs.com/) (Node package manager)

## Setup

### 1. Clone the repository

If you haven't already, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/todo-api.git
cd todo-api
```

### 1. Clone the repository

If you haven't already, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/todo-api.git
cd todo-api
```

### 2. Install dependencies

If you haven't already, clone the repository to your local machine:

```bash
npm install
```

### 3. Start the server

Once the dependencies are installed, you can start the server with the following command:

```bash
npm start
```

The server will run on port 5000. You should see the message:

```bash
Server running on port 5000
```

## API Endpoints

### 1. **GET /todos**

Fetch a list of todos with pagination.

**Query Parameters:**

- `page` (optional): The page number for pagination. Defaults to `1` if not provided.

**Response:**

```json
{
  "todos": [
    {
      "id": 1,
      "task": "Sample task",
      "completed": false
    }
  ],
  "total": 1
}
```

### 2. **POST /todos**

Create a new todo.

**Request Body:**

- `task` (required): The task description for the new todo.

**Response:**

```json
{
  "id": 1,
  "task": "Sample task",
  "completed": false
}
```

### 3. **PUT /todos/:id**

Update a specific todo.

**Request Body:**

- `task` (optional): The new task description.
- `completed` (optional): The new completion status (true or false).

**Response:**

```json
{
  "id": 1,
  "task": "Updated task",
  "completed": true
}
```

### 4. **DELETE /todos/:id**

Delete a specific todo.

**Response:**

```json
{
  "message": "Todo deleted"
}
```

## Technologies Used

- **Node.js**: JavaScript runtime used for building the server.
- **Express**: Framework for building RESTful APIs.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **body-parser**: Middleware to parse incoming JSON requests.
