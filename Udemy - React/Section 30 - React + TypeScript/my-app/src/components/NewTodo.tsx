import React, { FormEvent, useRef } from 'react'
import classes from "./NewTodo.module.css"

const NewTodo:React.FC<{onAddTodo:(text:string)=>void}> = (props)=> {
  const textRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event:FormEvent)=>{
    event.preventDefault();
    const enteredText = textRef.current!.value
    if(enteredText.trim().length === 0){
      //throw an error
      return ;
    }
    props.onAddTodo(enteredText)
  }
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={textRef}></input>
      <button >Add Todo</button>
      
    </form>
  )
}
export default NewTodo;
