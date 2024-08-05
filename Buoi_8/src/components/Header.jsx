import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <ul>
        <li>
            <Link to="/">trang chu</Link>
        </li>
        <li>
            <Link to="/blog">blog</Link>
        </li>
    </ul>
    
    </>
  )
}

export default Header