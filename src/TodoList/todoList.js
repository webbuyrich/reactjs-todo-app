import React from 'react';

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
 							<div key={_index}>{_todo}</div>
 						)
 					})
 				}
 			</div>
 		)
 	}

}

export default TodoList;
