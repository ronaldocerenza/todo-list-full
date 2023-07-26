import React from 'react'

export default function Todo({ todo }) {
  return (
    <div className='flex justify-between' key={todo.id}>
      <div className='w-3/5 flex justify-between items-center text-lg'>
        <span>{todo.text}</span>
        <span>{todo.category}</span>
      </div>
      <div className='flex m-1'>
        <button className='flex justify-center items-center bg-sky-500 hover:bg-sky-700 rounded-md mx-1 p-1 text-xs text-white'>
          <span className="material-symbols-outlined">
            check_circle
          </span>
        </button>
        <button alt='Concluir' className='flex justify-center items-center bg-sky-500 hover:bg-sky-700 rounded-md mx-1 p-1 text-xs text-white'>
          <span className="material-symbols-outlined">
            delete
          </span>
        </button>
      </div>
    </div>
  )
}

