/* eslint-disable no-undef */
const connection = require('./connection')

const getAll = async () => {
  const [todos] = await connection.execute(
    'SELECT * FROM todolist'
  );
  return todos;
}

const insertTodo = async (todo) => {
  const { text, category } = todo;
  const [result] = await connection.execute(
    'INSERT INTO todolist (text, category) VALUES (?, ?)',
    [text, category]
  );
  return {
    id: result.insertId,
    text,
    category
  };
}

const updateTodo = async (id, todo) => {
  const { text, category } = todo;
  await connection.execute(
    'UPDATE todolist SET text = ?, category = ? WHERE id = ?',
    [text, category, id]
  );
  return {
    id,
    text,
    category
  };
}

const deleteTodo = async (id) => {
  await connection.execute(
    'DELETE FROM todolist WHERE id = ?',
    [id]
  );
}

module.exports = {
  getAll,
  insertTodo,
  updateTodo,
  deleteTodo
};