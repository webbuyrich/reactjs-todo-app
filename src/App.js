import React from 'react';
import TodoList from './TodoList/todoList';
import TodoItem from './TodoItem/todoItem';
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

  addTodo = async (todo) => {
    await this.setState({ todos: [...this.state.todos, todo]});
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  }
}



export default App;
