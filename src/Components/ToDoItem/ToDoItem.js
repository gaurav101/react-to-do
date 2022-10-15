import React from 'react'
import propTypes from 'prop-types';

 function ToDoItem(props) {
  return (
     <>
      <h2>{props.todo.title}</h2>
       <p>{props.todo.description }</p>
       <button type="button" className="btn btn-danger" onClick={()=>props.onDelete(props.todo)}>Delete</button>
    
    </>
  )
}
ToDoItem.propTypes={
  todo:propTypes.object,
  onDelete:propTypes.func
}
export default ToDoItem;
