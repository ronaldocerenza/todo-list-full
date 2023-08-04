import PropTypes from "prop-types"
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";

export default function TodoForm({ addTodo, editTodo, edit, setEdit, setFormOpen, todos }) {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!value || !category) return toast.error('Preencha todos os campos!');
    
    if (edit !== undefined) {
      editTodo (edit, { text: value, category });
    } else {
      addTodo (value, category);
    }
    
    setValue('');
    setCategory('');
    setEdit();
    setFormOpen(false);
  }

  useEffect(() => {
    console.log(edit);
    const todosId = todos
    const upTodo = todosId.find(todo => todo.id === edit);
    
    if (edit !== undefined) {
      setValue(upTodo.text);
      setCategory(upTodo.category);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="text-xs text-center p-2">
        { edit !== undefined ? 'Editar ' : 'Criar '}
        <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block'>
          <span className='relative text-white'>
            Tarefa
          </span>
        </span>
      </h2>
      <form onSubmit={ handleSubmit } className="flex flex-col">
        <label htmlFor="">
          <input
            className="w-full block bg-sky-300 opacity-60 rounded-md p-1 mb-2"
            type="text"
            placeholder='Digite o título'
            value={ value }
            onChange={ e => setValue(e.target.value) }
          />
        </label>
        <div className="flex justify-between">
          <select
            className="w-4/6 bg-sky-300 opacity-60 rounded-md p-1 text-sky-900 mb-1"
            value={ category }
            onChange={ e => setCategory(e.target.value) }
          >
            <option value="">Selecione uma categoria</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
            <option value="Trabalho">Trabalho</option>
          </select>
          <button className='bg-sky-500 hover:bg-sky-700 text-sm sm:text-lg rounded-md text-white w-1/6' type='submit'>{ edit !== undefined ? 'Editar ' : 'Criar '}</button>
        </div>
      </form>
    </div>
  )
}

TodoForm.propTypes = {
  addTodo: PropTypes.func,
  edit: PropTypes.shape({
    category: PropTypes.any,
    id: PropTypes.any,
    text: PropTypes.any
  }),
  editTodo: PropTypes.shape({
    category: PropTypes.any,
    id: PropTypes.any,
    text: PropTypes.any
  }),
  setEdit: PropTypes.func,
  setFormOpen: PropTypes.func,
  todos: PropTypes.shape({
    find: PropTypes.func
  })
}

