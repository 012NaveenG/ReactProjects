import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id='nav-bar'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </div>
  )
}

export default Header
