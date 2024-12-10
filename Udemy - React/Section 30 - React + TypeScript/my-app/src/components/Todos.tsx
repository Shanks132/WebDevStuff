import Todo from "./models/Todos";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos:React.FC<{items:Todo[], onRemoveTodo:(id:string)=>void}> = (props) => {
  return (
    
      <ul className={classes.todos}>
        {props.items.map(item=><TodoItem removeTodoHandler={props.onRemoveTodo} key={item.id} id={item.id} text={item.TodoText}/>)}
      </ul>
    
  )
}

export default Todos; 
