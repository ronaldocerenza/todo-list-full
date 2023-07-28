/* eslint-disable no-undef */
const express = require('express');
// const { readTodo, writeTodo, updateTodo, deleteTodo } = require('./utils/fsUtils');
const { getAll, insertTodo, updateTodo, deleteTodo } = require('./db/todoDb');

const app = express();

app.use(express.json());

app.get('/todo', async (_req, res) => {
  const todo = await getAll();
  res.status(200).json(todo);
});

app.post('/todo', async (req, res) => {
  const newTodo = req.body;

  const newTodoId = await insertTodo(newTodo);
  return res.status(201).json(newTodoId);
});

app.put('/todo/:id', async (req, res) => {
  const { id } = req.params;
  const upTodo = req.body;

  const newTodo = await updateTodo(Number(id), upTodo);
  return res.status(201).json(newTodo);
});

app.delete('/todo/:id', async (req, res) => {
  const { id } = req.params;
  await deleteTodo(Number(id));

  return res.status(204).end();
});

module.exports = app;