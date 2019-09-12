import React from 'react';
import './style.css';

class TodoItem extends React.Component{

 	render(){

 		const { todo } = this.props;

 		return(
 			// run toggleTodo function when clicked
 			// add condtional class depending on if item is complted
 			<div className={'todoItem' + (todo.completed ? ' completed' : '')} onClick={this.toggleTodo}>{todo.text}</div>
 		)
 	}

 	toggleTodo = () =>{
 		this.props.updateTodoFn(this.props.todo);
 	}

}

export default TodoItem;
