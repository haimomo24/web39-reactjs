import React from 'react'
import Couter from './components/Couter'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <div>
      <Provider store={store} >
      <Couter/>
      </Provider>
      
    </div>
  )
}

export default App



//  useState ;
// 1. Xac dinh trang thai ban dau: initState = 0;
// 2. Action: Up(count + 1), Down(count - 1);



// userReducer 
// 1. Xac dinh trang thai ban dau: initState = 0;
// 2. Action: Up(count + 1), Down(count - 1);
// 3. reducer -> function
// 4. dispath -> Kich hoat reducer

// Redux ;
// tuong tu userReducer + useContext