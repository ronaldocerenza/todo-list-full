/* eslint-disable no-undef */
const express = require('express');

const app = express();

app.use(express.json());

app.get('/todo', (_req, res) => {
  res.status(200).json({ message: 'API Todolist OK' });
});

module.exports = app;