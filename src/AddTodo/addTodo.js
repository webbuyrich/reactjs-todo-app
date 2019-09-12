import React from 'react';

// This will update the state when adding a Todo object
class AddTodo extends React.Component{

	constructor(){
		super();
		this.state ={
			todo: ''
		};
	}

 	render(){
 		return(
 			<div className="">
 				<form onSubmit={(e) => this.submitTodo(e)} >
 					<input onChange={(e) => this.updateInput(e)} type='text'></input>
 					<button type="submit">Add Todo</button>
 				</form>
 			</div>
 		);
 	}

 	// function to update input onclick
 	updateInput = (e) =>{
 		/*log input each time a character is entered
 		console.log(e);*/
 		this.setState({ todo: e.target.value });
 	}

 	// function to submit the form
 	submitTodo = (e) => {
 		// prevents form from refreshing the page on submission
 		e.preventDefault();
 		console.log('submit', this.state);
 		this.props.addTodoFn(this.state.todo);
 	}

}

export default AddTodo;
