/* eslint-disable no-undef */
const connection = require('./connection')

const getAll = async () => {
  const [todos] = await connection.execute(
    'SELECT * FROM todolist'
  );
  return todos;
}

module.exports = {
  getAll,
};