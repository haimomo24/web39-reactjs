import React from "react"
import "./assets/styles.css"
// es6 
const App = () =>{
  const name = "web99";
  const rate = 5;
  
  const handleAlert = () =>{
      alert("Hi chao cau !");
  } 
  return (
    <React.Fragment>
      <h1 className = {`title-${rate}`} style={{color:"red"}}>He lo 500 anh em {name}</h1>
      <p className="description"> bla bla bla </p>
      <img src="../public/images1.jpg" />

      
      <button onClick={handleAlert}>Thong bao</button>
      <button onClick={()=>alert(123)}>qq</button>
      
    </React.Fragment>
   
  )
}
export default App
