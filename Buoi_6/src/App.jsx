import React from 'react'
import TodoListUserState from './components/TodoListUserState'
import TodoListUserReducer from './components/TodoListUserReducer'

const App = () => {
  return (
    <div>
      <TodoListUserState/>
      <TodoListUserReducer/>
    </div>
  )
}

export default App