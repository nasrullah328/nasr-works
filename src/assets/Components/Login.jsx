import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Components/Login.css'
const Login = () => {
  return (
    <div className='main-container'>
        <form className='Main-login-form'>
                <div className='inputs'>
                <h1 className='login-heading'>login</h1>
                    <input className='Email-password' type="Email" placeholder='Email' required={true}/>
                    <br />
                    <br />
                    <input className='Email-password' type="Password" placeholder='Password' required={true} />
                    <br />
                    <br />
                <button className='Login_btn'>login</button>
                <div className='signup-para'>
                <p className='sign-up-para'>Not a member? <span id='link'><NavLink to='/Signup'>sign up now</NavLink></span></p>
                </div>
                </div>
        </form>
    </div>
  )
}

export default Login
