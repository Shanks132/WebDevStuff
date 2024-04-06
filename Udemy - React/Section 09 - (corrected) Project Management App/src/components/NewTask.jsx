import { useState } from "react";

export default function NewTask({onAdd}){
  const  [enteredTask,setEnteredTask]=useState("");
  function handleChange(event){
    setEnteredTask(event.target.value)
  }
  function handleClick(){
    if(enteredTask.trim===''){
      return;
    }
    onAdd(enteredTask)
    setEnteredTask('');
  }

  return(
    <div className="flex item-center gap-4">
      <input 
      type="text" 
      className="p-2 rounded-sm w-64 bg-stone-200 "
      onChange={handleChange}
      value={enteredTask}
      />
      <button onClick={handleClick}
      className="text-stone-700 hover:text-stone-800">Add Task</button>
    </div>
  )
}