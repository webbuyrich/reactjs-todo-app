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
}

export default App;
