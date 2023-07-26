export default function Search({search, setSearch}) {
  return (
    <div>
      <h2 className="text-xs text-center p-2">
        Pesquisar{' '}
        <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block'>
          <span className='relative text-white'>
            Tarefa
          </span>
        </span>
      </h2>
      <input
        type='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Pesquisar tarefas"
        className="w-full block bg-sky-300 opacity-60 rounded-md p-1 mb-2"
      />
    </div>
  )
}
