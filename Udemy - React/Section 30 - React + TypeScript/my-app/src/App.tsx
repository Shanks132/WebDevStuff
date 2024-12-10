
import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './components/models/Todos';

function App() {
  const [todos,setTodos] = useState<Todo[]>([])
  
  const addTodoHandler = (todoText:string) =>{
    const newTodo = new Todo(todoText);
    setTodos((todos)=>{
      return todos.concat(newTodo);
    })
  }
  const removeTodoHandler = (todoId:string) =>{
   let newTodos = todos.filter(todo=>{
    return todo.id !== todoId;
   });
   setTodos(newTodos);
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
