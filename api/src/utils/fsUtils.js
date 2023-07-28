/* eslint-disable no-undef */
const fs = require('fs').promises;
const path = require('path');
const TODO_PATH = path.resolve(__dirname, '../../todo.json');

async function readTodo() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, TODO_PATH));
    const todo = JSON.parse(data);
    return todo;
  } catch (err) {
    console.error(err.message);
  }
}

async function writeTodo(newTodo) {
  try {
    const oldtodo = await readTodo();
    const newTodoId = { id: oldtodo.length + 1 , ...newTodo };
    const allTodo = JSON.stringify([...oldtodo, newTodoId]);
    await fs.writeFile(path.resolve(__dirname, TODO_PATH), allTodo);
    return newTodoId;
  } catch (err) {
    console.error(err.message);
  }
}

async function updateTodo(id, updateTodo) {
  const oldTodo = await readTodo();
  const newTodo = {id, ...updateTodo};
  const upTodo = oldTodo.reduce((acc, crrTodo) => {
    if (crrTodo.id === id) {
      return [...acc, newTodo];
    }
    return [...acc, crrTodo];
  }, []);
  const allTodo = JSON.stringify(upTodo);
  try {
    await fs.writeFile(path.resolve(__dirname, TODO_PATH), allTodo);
    return newTodo;
  }
  catch (err) {
    console.error(err.message);
  }
}

async function deleteTodo(id) {
  const oldTodo = await readTodo();
  const newTodo = oldTodo.filter((todo) => todo.id !== id);
  const allTodo = JSON.stringify(newTodo);
  
  try {
    await fs.writeFile(path.resolve(__dirname, TODO_PATH), allTodo);
    return newTodo;
  } catch (err) {
    console.error(err.message);
  }
}


module.exports = {
  readTodo,
  writeTodo,
  updateTodo,
  deleteTodo,
};