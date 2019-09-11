import React from 'react';

class AddTodo extends React.Component{

 	render(){
 		return(
 			<div className="">
 				<form onSubmit={(e) => this.submitTodo(e)} >
 					<input 	onChange={(e) => this.updateInput(e)} type='text'></input>
 					<button type="submit">Add Todo</button>
 				</form>
 			</div>
 		);
 	}

 	// function to update input onclick
 	updateInput = (e) =>{
 		// log input each time a character is entered
 		console.log(e);
 	}

 	// function to submit the form
 	submitTodo = (e) => {
 		e.preventDefault();
 		console.log('submit');
 	}

}

export default AddTodo;
