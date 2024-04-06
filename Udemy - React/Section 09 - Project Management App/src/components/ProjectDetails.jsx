import React, { useState,useRef } from "react";
import Task from './Task';

export default function ProjectDetails({ projects, currentProject, updateProjectArray }) {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  
  

  function updateProjectDetails(projectSelected) {
    const project = projectSelector(projectSelected);
    setTitle(project.Title);
    setTasks(project.Tasks);
  }

  

  function projectSelector(projectSelected) {
    return projects.find(project => project.Title === projectSelected) || { Title: '', Tasks: [] };
  }


  // Update project details whenever currentProject changes
  if (currentProject !== title) {
    updateProjectDetails(currentProject);
  }


  function taskClearHandler(taskName) {
    setTasks(prevTasks => prevTasks.filter(task => task !== taskName));
  }

  
  function addTaskHandler() {
    const newTaskName = inputRef.current.value;
    if (newTaskName.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, newTaskName]);
      inputRef.current.value = "";
      const newTaskArray = projectSelector(currentProject).tasks.concat([newTaskName])
      updateProjectArray(projectEdited,newTaskArray);
    }
  }
  function updateTaskHandler(oldTaskName, newTaskName) {
    setTasks(prevTasks =>
      prevTasks.map(task => (task === oldTaskName ? newTaskName : task))
    );
  }

  function taskElementGen() {
    return tasks.map(element => (
      <Task key={element} element={element} removeTask={taskClearHandler} />
    ));
  }

  return (
    <div id="header" className="bg-slate-200 w-3/5 mt-6 rounded-lg ml-2 flex flex-col gap-4">
      <h2 className="text-amber-500 text-3xl font-bold mx-auto px-9">{title}</h2>
      <div className="flex">
        <input ref={inputRef} type="text" className='bg-slate-200 border-2 border-solid mx-auto' placeholder="Add task" />
        <button onClick={()=>addTaskHandler(inputRef.current.value)} className="hover:bg-slate-600">+</button>
      </div>
      <ul className="mx-auto flex flex-col gap-5">
        {taskElementGen()}
      </ul>
    </div>
  );
}
