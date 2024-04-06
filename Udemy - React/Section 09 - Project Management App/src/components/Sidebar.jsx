import { useState } from "react";
export default function Sidebar({projects,onProjectChange}){
  
  

  function displayProjects(projects){
    let projectElements = [];
    projects.map(element=>{
      projectElements.push(<li key={element.title} className="mx-auto"><button onClick={()=>onProjectChange(element.Title)}>{element.Title}</button></li>);
    });
    return projectElements;
  }

  const[projectList, setProjectList] = useState(projects)

  function addProjectList(newProject){
    setProjectList([...projects,newProject]);
    projects.push({"Title":newProject,"Tasks":[]}); 
  }
  

  return (
    
    <>
    <div className=" mt-8 mx-auto flex flex-col justify-center overflow-auto text-xl lg:text-2xl font-bold">
      <p className=" text-center mx-auto pr-4">Your Projects</p>

      <button className="hover:bg-slate-500  hover:font-semibold my-4 text-lg mt-3 w-3/6 mx-auto rounded-lg h-1/12" onClick={()=>addProjectList(`Project${projectList.length+1}`)}>
        <img color="white" id="plusSign" className="opacity-0 xl:opacity-100" src="https://cdn-icons-png.flaticon.com/512/32/32339.png"/>
        <p>
          Add Project
        </p>
        </button>
    </div>

    <ul id="projectNames" className="flex flex-col text-xl gap-3 my-3 align-middle">
      {displayProjects(projectList)}
    </ul>
    </>
    
  )
}