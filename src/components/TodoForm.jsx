import React from 'react'

export default function TodoForm() {
  return (
    <div>
      <h1>Criar Tarefa</h1>
      <form>
        <label htmlFor="">
          <input type="text" placeholder='Digite o título' />
        </label>
        <select name="" id="">
          <option value="">Selecione uma categoria</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
          <option value="Trabalho">Trabalho</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
  )
}
