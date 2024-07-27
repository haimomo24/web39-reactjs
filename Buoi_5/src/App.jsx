import React from 'react'
import ChildA from './component/ChildA'
import ChildB from './component/ChildB'
import ChildC from './component/ChildC'
import ChildD from './component/ChildD'

const App = () => {
  const array = [
    {
        id:1,
        name:"buoi 4"
       
    },
    {
        id:2,
        name:"buoi 5"
    }

];
const star = 3 ;
  return (
    <>
    {/* render : theo điều kiện if else */}
    <ChildA array={array}/>

    {/* render theo toan tu 3 ngoi  */}
    <ChildB array={array}/>
    {/* render theo toan tu && */}
    <ChildC array={array}/>
    {/* render vs enum */}
    <ChildD star={star}/>
    </>
    
  )
}

export default App