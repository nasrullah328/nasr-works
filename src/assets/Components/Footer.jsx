import React from 'react'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import Twitter from '../images/twitter.png'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='main-footer'>
            <div className="Footer-logo">
            <NavLink to='/Home'>Nasr shop</NavLink></div>
            <div className="paraghraph">
            <p>Lorem ipsum dolor
             sit amet consectetur  alias 
             corporis fugiat magnam</p> 
            <p>Lorem ipsum dolor
             corporis fugiat magnam</p>
            <p>Lorem ipsum dolor
             sit amet   alias 
             </p>
             <div className="btn-input">
             <button className='btn'>Subscribe</button>
             <input className='input' type="text" placeholder='Your Email' />
             </div>
             </div> 
            <div className="social-mendia">
                <ul>
                   <li>
                    <img src={facebook} alt="" />
                   </li>
                   <li>
                    <img src={instagram} alt="" />
                   </li>
                   <li>
                    <img src={Twitter} alt="" />
                   </li>
                </ul>
            </div>
    <div className="menu-list">
        <ul>
            <li>
            <NavLink to='/Home'>Home</NavLink>
            </li>
            <li>
            <NavLink to='/Shop'>Shop</NavLink>
            </li>
            <li>
            <NavLink to='/'>policy</NavLink>
            </li>
            <li>
            <NavLink to='/About'>About</NavLink>
            </li>
        </ul>
    </div>
    </footer>
  )
}

export default Footer
