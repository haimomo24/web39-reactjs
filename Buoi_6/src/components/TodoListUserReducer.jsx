import { useState } from "react"


const TodoListUserReducer = () => {
    const [todos, setTodos] = useState([])
    const handelTask = ()=>{
        console.log(123)
    }
  return (
    <>
    <button onClick={handelTask}>add task 2</button>
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

export default TodoListUserReducer