

import classes from "./TodoItem.module.css"
const TodoItem:React.FC<{text:string, id:string, removeTodoHandler:(id:string)=>void}>=(props)=>{
  return (
    <li className={classes.item}>{props.text}
    <button onClick={()=>props.removeTodoHandler(props.id)}>Remove Todo</button>
    </li>
  )
}
export default TodoItem