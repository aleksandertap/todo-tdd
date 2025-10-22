const express = require('express');
const todoRoutes = require('./routes/todo.route');
const app = express();
const mongodb = require('./mongoDb/mongodb.connect');

mongodb.connect();

app.use(express.json());

app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;