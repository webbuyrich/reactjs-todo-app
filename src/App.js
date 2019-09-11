import React from 'react';
import TodoList from './TodoList/todoList';
import TodoItem from './TodoItem/todoItem';

import './App.css';

class App extends React.Component{

  render(){
    return(
      <div>
          <TodoList></TodoList>
          <TodoItem></TodoItem>
      </div>)
  }

  // when component is rendered and put into the DOM
  componentDidMount = () => {
    // see if there is anything in local storage about todos
    const todos = localStorage.getItem('todos');
    if(todos){
      console.log('Had todos', todos);
    } else{
      console.log('No todos');
    }
  }
}

export default App;
