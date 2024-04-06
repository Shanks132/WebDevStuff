import { useState } from 'react'

import './App.css'
import Sidebar from './components/Sidebar'
import ProjectDetails from './components/ProjectDetails';


let projects = [
  {
    "Title":"Project-1",
    "Tasks":["Task-1","Task-2"],
  },{
    "Title":"Project-2",
    "Tasks":["Task-3","Task-4"],
  },
];

function App() {
  const [selectedProject,setSelectedProject] = useState(projects[0].Title)
  function changeProjectHandler(projectName){
    setSelectedProject(()=>projectName); 
    console.log(selectedProject) 
  } 
  function updateProjectArray(projectEdited,newTaskArray){
    projects.find((project => project.Title === projectEdited)).Tasks = newTaskArray;
  }
  return (
    <div className=' flex'>
      <menu className=' w-2/6 lg:w-3/12 py-4 mt-6 rounded-xl bg-black text-white'>
      <Sidebar projects={projects} onProjectChange={changeProjectHandler}/>
      </menu>
      <ProjectDetails projects={projects} currentProject={selectedProject} updateProjectArray={updateProjectArray}/>
    </div>
  )
}

export default App
