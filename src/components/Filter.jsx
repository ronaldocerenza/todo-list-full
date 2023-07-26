export default function Filter() {
  return (
    <div className="flex justify-between">
      <div className="w-1/2">
        <h2 className="text-xs text-center p-2">
          Filtrar{' '}
          <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block'>
            <span className='relative text-white'>
              Tarefa
            </span>
          </span>
        </h2>
        <div className="flex justify-between">
          <select
            className="w-full block bg-sky-300 opacity-60 rounded-md p-1 mb-2"
          >
            <option value="All">Todas</option>
            <option value="Complete">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
      </div>
      <div className="w-1/2">
        <h2 className="text-xs text-center p-2">
          Ordenar{' '}
          <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block'>
            <span className='relative text-white'>
              Tarefa
            </span>
          </span>
        </h2>
        <div className="flex justify-evenly">
          <button className='bg-sky-500 hover:bg-sky-700 rounded-md text-white w-2/6'>
            Asc
          </button>
          <button className='bg-sky-500 hover:bg-sky-700 rounded-md text-white w-2/6'>
            Desc
          </button>
        </div>
      </div>
    </div>
  )
}
