import Input from "./Input"
import {useRef} from 'react'
import Modal from "./Modal";
export default function Newproject({onAdd,onCancel}){
  const modal = useRef()
  const title = useRef();
  const description= useRef();
  const dueDate = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation 
    if(enteredTitle.trim() === ''|| enteredDueDate.trim() === '' || enteredDescription.trim()===''){
      //show error modal
      modal.current.open();
      return ;
    }

    onAdd({
      title:enteredTitle,
      description:enteredDescription,
      dueDate:enteredDueDate
    });
  }
  return(
    <>
    <Modal ref={modal} buttonCaption="Okay">
      <h2 className="text-xl font-bold text-stone-800 my-4 ">Invalid Input</h2>
      
      <p className="text-stone-600 mb-4">Forget to enter values</p>
      <p className="text-stone-600 mb-4">enter valid details in all input fields</p>
    </Modal>
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button onClick={onCancel} className="text-stone-800 hover:black">Cancel</button></li>
        <li><button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-slate-900 rounded-md px-6 py-2">Save</button></li>
      
      </menu>
      <div>
        <Input type="text" label="Title" ref={title}/>
        <Input textarea label="description"  ref={description}/>
        <Input type="date" label="Due Date" ref={dueDate}/>
        

      </div>
    </div>
    </>
  )
}