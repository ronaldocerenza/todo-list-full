import PropTypes from "prop-types"

export default function Todo({ todo, removeTodo, completeTodo, setEdit, setFormOpen, edit }) {
  
  const handleEdit = () => {
    setEdit(todo.id)
    setFormOpen(true)
  }

  return (
    <div
    className='position-absolute flex justify-between'
    key={todo.id}>
      <div className={`w-2/4 flex justify-around items-center text-lg tex ${todo.isCompleted ? 'line-through text-green-500' : ''} ${edit === todo.id ? 'line-through text-red-500' : ''}`}>
        <p className="w-1/2 text-sm sm:text-lg truncate ...">{todo.text}</p>
        <p className="text-sm sm:text-lg">{todo.category}</p>
      </div>
      <div className='flex m-1'>
        <button
          className='flex justify-center items-center bg-sky-500 hover:bg-sky-700 rounded-md mx-1 p-1 text-xs text-white'
          onClick={() => completeTodo(todo.id)}
        >
          <span className="material-symbols-outlined">
            check_circle
          </span>
        </button>
        <button
          alt='Concluir'
          className='flex justify-center items-center bg-sky-500 hover:bg-sky-700 rounded-md mx-1 p-1 text-xs text-white'
          onClick={() => removeTodo(todo.id)}
        >
          <span className="material-symbols-outlined">
            delete
          </span>
        </button>
        <button
          alt='Editar'
          className='flex justify-center items-center bg-sky-500 hover:bg-sky-700 rounded-md mx-1 p-1 text-xs text-white'
          onClick={handleEdit}
        >
          <span className="material-symbols-outlined">
            edit
          </span>
        </button>
      </div>
    </div>
  )
}

Todo.propTypes = {
  completeTodo: PropTypes.func,
  edit: PropTypes.any,
  editTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  setEdit: PropTypes.func,
  setFormOpen: PropTypes.func,
  todo: PropTypes.shape({
    category: PropTypes.any,
    id: PropTypes.any,
    isCompleted: PropTypes.any,
    text: PropTypes.any
  })
}

