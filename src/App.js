import React from 'react';
import TodoList from './TodoList/todoList';
import AddTodo from './AddTodo/addTodo';


import './App.css';

class App extends React.Component{

  constructor(){
    super();
    this.state ={
      todos: []
    };
  }

  render(){
    return(
      <div>
          <AddTodo addTodoFn={this.addTodo}></AddTodo>
          <TodoList todos={this.state.todos}></TodoList>
      </div>
      );
  }

  // when component is rendered and put into the DOM
  componentDidMount = () => {
    // see if there is anything in local storage about todos
    // must change object into string before putting into local storage - use JSON.stringify
    // must change string into object when it comes out - use JSON.parse
    const todos = localStorage.getItem('todos');
    if(todos){
      const savedTodos = JSON.parse(todos);
      // update state - state is an asynchronus function
      this.setState({ todos: savedTodos });
    } else{
      console.log('No todos');
    }
  }

  // asynchronous function must have await before setting item in function
  // will add have all current todos plus any new todo
  addTodo = async (todo) => {
    await this.setState({ todos: [...this.state.todos, todo]});
    // this will now run after state to update and save into local storage
    // since todos is an object, must convert to string using JSON.stringify
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  }
}



export default App;
