class Todo {
  id:string;
  TodoText:string;
  constructor(TodoText:string){
    this.id = new Date().toISOString();
    this.TodoText=TodoText
  }
}
export default Todo;