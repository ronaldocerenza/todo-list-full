import { useState } from 'react';

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
    <div className="bg-green-500">
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map(todo => (
          <div className='todo' key={todo.id}>
            <div className='content'>
            <p>{todo.text}</p>
            <p>({todo.category})</p>
            </div>
            <div>
              <button>Concluir</button>
              <button>Excluir</button>
            </div>
          </div>
        ))}
      </div>      
    </div>
  )
}
