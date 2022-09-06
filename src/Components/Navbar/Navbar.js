

import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
    <div className='navcontainer'>
        <span>YoloBooking</span>

        <div >
            <button className='navbutton'>Log In</button>
            <button className='navbutton'>Register</button>
        </div>
    </div>
    </div>
  )
}
