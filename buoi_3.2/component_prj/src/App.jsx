// import React from 'react'

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Content from "./components/main-content/Content";
import SideNav from "./components/sidebar/SideNav";

const App = () => {
  return (
    <>
    <Header/>
     
    <div style ={{display:"flex"}}>
    <SideNav/>
    <Content/>
    <SideNav/>
    </div>
    <Footer/>
    
    </>
  )

};

export default App