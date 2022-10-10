import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Components/Signup.css'
const Signup = () => {
  return (
    <div className='main-container-signup'>
    <form className='Main-login-form-signup'>
            <div className='inputs'>
            <h1 className='login-heading'>Sign Up</h1>
            <input className='Email-password' type="Name" placeholder='Name' required={true}/>
                <br />
                <br />
                <input className='Email-password' type="Email" placeholder='Email' required={true}/>
                <br />
                <br />
                <input className='Email-password' id='dob' type="date" placeholder='date of birth' required={true}/>
                <br />
                <br />
                <input className='Email-password' type="Password" placeholder='Password' required={true} />
                <br />
                <br />
                <input className='Email-password' type="Password" placeholder=' Confirm Password' required={true} />
                <br />
                <br />
            <button className='Login_btn'>Sign up</button>
            <div className='signup-para'>
            <p className='sign-up-para'>Already have account? <span id='link'><NavLink to='/login'>Login</NavLink></span></p>
            </div>
            </div>
    </form>
</div>
  )
}

export default Signup