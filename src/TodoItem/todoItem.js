import React from 'react';

class TodoItem extends React.Component{

 	render(){

 		const { todo } = this.props;

 		return(
 			// run toggleTodo function when clicked
 			<div onClick={this.toggleTodo}>{todo.text}</div>
 		)
 	}

 	toggleTodo = () =>{
 		this.props.updateTodoFn(this.props.todo);
 	}

}

export default TodoItem;
