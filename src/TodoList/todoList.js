import React from 'react';
import TodoItem from '../TodoItem/todoItem';

class TodoList extends React.Component{

 	render(){

 		const { todos } = this.props;

 		return(
 			// create div with classname
 			<div className='todoListContainer'>
 				{
 					// iterate or map through all todos, with an index
 					todos.map((_todo, _index) =>{
 						return(
 							//return a div with the key and todo from the map
 							<TodoItem updateTodoFn={this.updateTodo} key={_index} todo={_todo}></TodoItem>
 						)
 					})
 				}
 			</div>
 		)
 	}

 	updateTodo = (todo) =>{
 		this.props.updateTodoFn(todo);
 	}

}

export default TodoList;
