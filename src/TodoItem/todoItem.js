import React from 'react';

class TodoItem extends React.Component{

 	render(){
 		const { todo } = this.props;
 		
 		return(
 			<div>{todo}</div>
 		)
 	}

}

export default TodoItem;
