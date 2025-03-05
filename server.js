const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let todos = [];
let idCounter = 1;

app.get('/todos', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const startIndex = (page - 1) * limit;
    const paginatedTodos = todos.slice(startIndex, startIndex + limit);
    res.json({ todos: paginatedTodos, total: todos.length });
});

app.post('/todos', (req, res) => {
    const { task } = req.body;
    if (!task) return res.status(400).json({ message: 'Task is required' });
    const newTodo = { id: idCounter++, task, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;
    let todo = todos.find(t => t.id === parseInt(id));
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    if (task) todo.task = task;
    if (completed !== undefined) todo.completed = completed;
    res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(t => t.id !== parseInt(id));
    res.json({ message: 'Todo deleted' });
});

app.listen(5000, () => console.log('Server running on port 5000'));