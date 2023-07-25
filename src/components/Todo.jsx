import React from 'react'

export default function Todo({ todo }) {
  return (
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
  )
}

