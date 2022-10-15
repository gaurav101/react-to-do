import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
import { useState,useEffect } from 'react';
import AddToDo from '../AddToDo/AddToDo';
export default function ToDos() {
  let intiToDo;
  if(localStorage.getItem('todos')===null){
    intiToDo=[];
    localStorage.setItem('todos',JSON.stringify(intiToDo));
  }else{
      intiToDo=JSON.parse(localStorage.getItem('todos'));
  }

   const handleDelete=(item)=>{
      setTodos(todos.filter((e)=>{
        return e!=item;
      }));
   };
   const addToDo=(title,desc)=>{
       let index=todos && todos.length>0?todos[todos.length-1].sr+1:1;
       setTodos([...todos,{sr:index,title:title,description:desc}]);
       
   };
   const [todos,setTodos] = useState(intiToDo);
   useEffect(() => {
   localStorage.setItem('todos',JSON.stringify(todos));
   }, [todos])
   
  return (
    <div className='container'>
        <AddToDo addToDo={addToDo}/>
      <h3 className='text-center'>Todo's list</h3>
      <ul className="list-group">
      {
          todos.length>0?
           todos.map(item=>{
            return (
                <>
                 <li key={item.sr} className="list-group-item">
                 <ToDoItem key={item.sr} todo={item} onDelete={handleDelete}/>
                 </li> 
                </> 
            )
          }):<li key={0} className="list-group-item">No item in to do list.</li>
      }
     </ul>
    </div>
  )
}
