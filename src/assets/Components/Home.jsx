import React from 'react'
import Slideshow from './Slideshow'
import  apple from '../images/apple.png'
import  samsunglogo from '../images/samsunglogo.png'
import  milogo from '../images/milogo.png'
import '../Components/Home.css'
const Home = () => {
  return (
   <>
      <Slideshow />
      <div className="dealers">
      <h1>Partership with brands</h1>
        <div className="Dealers-images">
          <ul>
            <li className='image'><img src={apple} alt="apple" /></li>
          </ul>
          <ul>
            <li className='image'><img src={samsunglogo} alt="samsung" /></li>
          </ul>
          <ul>
            <li className='image'><img src={milogo} alt="mi" /></li>
          </ul>
        </div>
      </div>
   </>
  )
}

export default Home
