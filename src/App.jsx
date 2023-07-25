import { useState } from 'react';
import Todo from './components/Todo';

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
  return (
    <div className="flex bg-[url('src/img/imglist.jpg')] bg-center bg-cover w-screen h-screen">
      <div className='bg-slate-300 bg-opacity-30 w-1/2 h-1/2 m-auto rounded-xl p-8'>
      <h1 className='text-4xl text-center'>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map(todo => (
          <div key={todo.id}>
            <Todo todo={ todo }/>
          </div>
        ))}
      </div>  
      </div>
    </div>
  )
}
