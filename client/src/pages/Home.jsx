import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import imag from '../assets/spotify.png'

const Home = () => {
  return (
    <>
    <div className='contai'>
      <div className='nav'>
      <div className='image'>
        <img src={imag} alt="" />
      </div>
      <p>Spotify</p>
      <div className='a'>Premium</div>
      <div className='b'>Help</div>
      <div className='c'>Download</div>
      <Link to={"/signup"}>
        <div className='d'>Sign Up</div>
      </Link>
      <Link to={"/login"}>
        <div className='e'>Log In</div>
      </Link>
    </div><div className="container">
        <div className='sen1'>Music for Eveyone</div>
        <div className='sen2'>Millions of songs.No credit card needed</div>
        <button className='but'>GET SPOTIFY FREE
        </button>
      </div>
      </div></>
  )
}

export default Home
