import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

export default function App() {
const [todos, setTodos] = useState([
  {
    id: 1,
    text: 'Fazer café',
    category: 'Pessoal',
    isCompleted: false
  },
  {
    id: 2,
    text: 'Estudar React',
    category: 'Estudos',
    isCompleted: false
  },
  {
    id: 3,
    text: 'Criar um todo list',
    category: 'Trabalho',
    isCompleted: false
  },
])
const [search, setSearch] = useState('');
const [filter, setFilter] = useState('All');
const [sort, setSort] = useState('Asc');

const addTodo = (text, category) => {
  const newTodos = [
    ...todos,
    { id: todos.length + 1, text, category }];
  setTodos(newTodos);
}

const removeTodo = id => {
  const newTodos = todos.filter(todo => todo.id !== id);
  setTodos(newTodos);
}

const completeTodo = id => {
  const newTodos = todos.map(todo => {
    if (todo.id === id) {
      todo.isCompleted = !todo.isCompleted;
    }
    return todo;
  });
  setTodos(newTodos);
}

  return (
    <div className="flex bg-[url('src/img/imglist.jpg')] bg-center bg-cover w-screen h-screen justify-center items-center">
      <div className='bg-slate-300 bg-opacity-30 w-4/5 h-auto rounded-xl shadow-lg p-4'>
      <h1 className='text-4xl rounded-md text-center p-2'>
        Lista de{' '}
        <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block'>
        <span className='relative text-white'>
        Tarefas
        </span>
        </span>
      </h1>
      <Search search={ search } setSearch={ setSearch }/>
      <Filter filter={ filter } setFilter={ setFilter} setSort={ setSort }/>
      <div className='mb-6'>
        {todos
        .filter((todo) => 
          filter === 'All'
          ? true
          : filter === 'Complete'
          ? todo.isCompleted
          : !todo.isCompleted
          )
        .filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) =>
          sort === 'Asc'
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text)
          )
        .map(todo => (
          <Todo key={todo.id} todo={ todo } removeTodo={ removeTodo } completeTodo={ completeTodo }/>
        ))}
      </div>
          <TodoForm addTodo={ addTodo } />
      </div>
    </div>
  )
}