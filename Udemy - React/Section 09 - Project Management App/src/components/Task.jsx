export default function Task({ element, removeTask, tasks}) {
  return (
    <div className="flex gap-8">
      <li className="text-2xl" key={element}>
        {element}
      </li>
      <button className="hover:underline text-lg " onClick={() => removeTask(element, tasks)}>
        Clear
      </button>
    </div>

  );
}