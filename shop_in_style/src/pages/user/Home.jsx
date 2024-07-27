import React from 'react'
import Header from '../../components/user/common/Header'
import Footer from '../../components/user/common/Footer'
import Nav from '../../components/user/home/Nav'
import Section from '../../components/user/home/Section'

const Home = () => {
  return (
    <>
  {/* header*/}
    <Header/>
  {/* nav*/}
    <Nav/>
  {/* Section*/}
  <Section/>
  {/* Footer*/}
  <Footer/>
</>

  )
}

export default Home