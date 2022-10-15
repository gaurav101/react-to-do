import React, { useState } from 'react'
import propTypes from 'prop-types'

function AddToDo(props) {
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title and description can not be empty.");
            return;
        }
        props.addToDo(title,desc);
        setTitle("");
        setDesc("");
       
    };
    const [title,setTitle]= useState('');
    const [desc,setDesc]= useState('');
    return (
    <div className='container'>
    <form onSubmit={submit}>
    <div className="mb-3">
        <h3 className='text-center my-2'>Add Task in To Do</h3>
    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="exampleFormControlInput1" placeholder="Tile of To do"/>
    </div>
    <div className="mb-3">
     <label htmlFor="description" className="form-label" >Description</label>
     <input className="form-control" id="description" value={desc} onChange={(e)=>setDesc(e.target.value)}></input>
    </div>
     <button type="submit" className="btn btn-primary">Add</button>
     </form>
    </div>
  )
}

AddToDo.propTypes = {
    addToDo: propTypes.func
}

export default AddToDo

