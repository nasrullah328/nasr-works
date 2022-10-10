import React from 'react'
import '../Components/Contact.css'
const Contact = () => {
  return (
    <div className='white-space'> 
    <div className="wrap">
    <div className="Contact-banner">
      <h1>Contact Us</h1>
      <p>Got a questions We'd love to hear from you.</p>
      <p>Send us message and we will respond as soon as possible </p>
    <form>
    <div>
      <input className='form-input' type="Name" placeholder='Name' required={true}/>
      </div>
      <div>
      <input className='form-input' type="Last Name" placeholder='Last Name' required={true}/>
      </div>
      <div>
      <input className='form-input' type="Email" placeholder='Your Email' required={true}/>
      </div>
      <div>
      <textarea className='text-area' name="text" id="text-area" cols="30" rows="10" placeholder='Type Your Message'></textarea>
    </div>
    <div>
      <button className='submit-btn'>submit</button>
    </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Contact
