import React, { useState } from 'react'
import './Home.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function Home() {
    const [listTodo,setListTodo] =useState([]);
  let addList = (inputText)=>{
    if(inputText !== '')
    setListTodo([...listTodo,inputText]);
  }

  const deletelistitem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
      <TodoInput addList = {addList}/>
      <h1 className='app-heading'>TODO</h1>
      <hr/>
      {listTodo.map((listItem,i)=>{
        return(
          <TodoList key={i} index={i} item={listItem} deletetItem={deletelistitem}/>
        )
      })}

      </div>
     </div>
  )
}

export default Home
