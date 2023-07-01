import React from 'react'
import { Link } from 'react-router-dom'
import imag from '../assets/download.jpg'

const Home = () => {
  return (
    <div className="nav">
    <div className="img"></div>
    <img src={imag} alt="" />
    <div className="a">premium</div>
    <div className="b">Help</div>
    <div className="c">Download</div>
    <Link to={"/signup"}>
        <div className='d'>Sign Up</div>
    </Link>
    <Link to={"/login"}>
        <div className='e'>Log In</div>  
    </Link>
    </div>
  )
}

export default Home