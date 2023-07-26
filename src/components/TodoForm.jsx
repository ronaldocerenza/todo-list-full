import { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!value || !category) return;
    addTodo (value, category);

    setValue('');
    setCategory('');
  }

  return (
    <div className="flex flex-col">
      <p className="text-lg text-center p-2">
        Criar{' '}
        <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block'>
          <span className='relative text-white'>
            Tarefa
          </span>
        </span>
      </p>
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
          <button className='bg-sky-500 hover:bg-sky-700 rounded-md text-white w-1/6' type='submit'>Criar Tarefa</button>
        </div>
      </form>
    </div>
  )
}
