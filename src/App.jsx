import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function App() {
const [todos, setTodos] = useState([])
const [search, setSearch] = useState('');
const [filter, setFilter] = useState('All');
const [sort, setSort] = useState('Asc');
const [edit, setEdit] = useState();
const [formOpen, setFormOpen] = useState(false);

const getTodo = async () => {
  try {
    const res = await axios.get('http://localhost:3001/todo');
    setTodos(res.data);
  } catch (error) {
    toast.error(error);
  }
}

useEffect(() => {
  getTodo();

}, [setTodos]);

const addTodo = async (text, category) => {
  const newTodo = {
    text,
    category,
  };
  
  try {  
    await axios.post('http://localhost:3001/todo', newTodo);
    setTodos([...todos, newTodo]);
    toast.success('Tarefa adicionada com sucesso!');
  } catch (error) {
    toast.error(error);
  }
  window.location.reload();
}

const removeTodo = async id => {
  try {
    await axios.delete(`http://localhost:3001/todo/${id}`);
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    toast.success('Tarefa removida com sucesso!');
  } catch (error) {
    toast.error(error);
  }
}

const editTodo = async (id, upTodo) => {
  try {
    await axios.put(`http://localhost:3001/todo/${+id}`, upTodo);
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.text = upTodo.text;
        todo.category = upTodo.category;
      }
      return todo;
    });
    setTodos(newTodos);
    toast.success('Tarefa editada com sucesso!');
  } catch (error) {
    toast.error(error);
  }
}


const completeTodo = id => {
  try {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
    toast.info('Tarefa Alterada')
  } catch (error) {
    toast.error(error);
  }
}

const handleFormOpen = () => {
  setFormOpen(!formOpen);
  setEdit();
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
      <div className='mb-6 h-60 overflow-y-auto'>
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
          <Todo key={todo.id} edit={edit} setEdit={setEdit} todo={ todo } removeTodo={ removeTodo } completeTodo={ completeTodo } setFormOpen={setFormOpen}/>
        ))}
      </div>
      {formOpen && <TodoForm edit={edit} setEdit={setEdit} todos={ todos } addTodo={ addTodo } editTodo={editTodo} setFormOpen={setFormOpen}/>}
        <button
          className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded'
          onClick={handleFormOpen}
        >
          {formOpen ? 'Fechar' : 'Adicionar Terefa'}
        </button>
      </div>
      <ToastContainer autoClose={2000} position={toast.POSITION.BOTTOM_LEFT}/>
    </div>
  )
}