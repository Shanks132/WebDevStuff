import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {

  return (
    <section>

      <h2 className="text-2xl font-bold mb-4 text-stone-700">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && <p className="mb-4 text-stone-800 mt-6">No tasks remaining</p>}
      {tasks.length > 0 &&(
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => 
            <li className="flex justify-between"
            key={task.id}>
            <span>
              {task.text}
            </span>
            <button
              onClick={()=>onDelete(task.id)} 
              className="text-stone-700 hover:text-red-600">
              Clear
              </button>
          </li>) 
            }
        </ul>)
      }
    </section>
  )
}