import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import '../Components/Login.css'
const Navbar = () => {
  return (
      <nav className='main-navbar'>
     <div className="logo"><NavLink to='/home'><h1> Nasr shop </h1></NavLink></div>
     <div className="menu-links">
      <ul>
      <li>
        <NavLink to='/Home'>Home</NavLink>
      </li>
      <li>
      <NavLink to='/Shop'>Shop</NavLink>
      </li>
      <li>
      <NavLink to='/Contact'>Contact</NavLink>
      </li>
      <li>
      <NavLink to='/About'>About</NavLink>
      </li>
      </ul>
     </div>
     <div className='NavBtn'>
      <NavLink to='/Login'><button className='Login-btn-nav'>Login</button></NavLink>
      </div>
    </nav>
  )
}

export default Navbar
