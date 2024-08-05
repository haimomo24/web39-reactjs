import React, { useState } from 'react'

const TodoListUserState = () => {
    const [todos, setTodos] = useState([])
    const handleTask = ()=>{
        // tao mang moi sao chep mang cu va them gia trij "new task"
        setTodos((task)=> [...todos,"new task"])
    }
  return (
    <>
    <button onClick={handleTask}>Add state 1</button>
    <ul>
    {todos.length > 0 && todos.map((value, index)=>{
        return (
            <li key={index}>{value}</li>
        )
    })}
    {!todos.length >0 && <li>khong ton tai</li>}
    </ul>
  
      </>
  )
    
  
    
}

export default TodoListUserState