

import React from 'react'
import './Featured.css'

export default function Featured() {
  return (
    <div className="featuredcontainer">
        <div className="featureditems">
            <img src="https://bstatic.com/xdata/images/xphoto/1182x887/161581075.jpg?k=184d27fed0c8d4ec8b858b9faba02348198cb14a30426db886e5d0f5b648562c&o=?size=S" alt="" />
           
            <div className='featureditemsTitle' >
                <h1>Spain</h1>
                <h3>123 properties</h3>
            </div>
        </div>
        <div className="featureditems">
            <img src="https://bstatic.com/xdata/images/xphoto/1182x887/147544380.jpg?k=18ecc19f027526a2ed83a69e2b879f0a95d6c6943e5d7857af5b9c791c9d2620&o=?size=S" alt="" />
           
            <div className='featureditemsTitle' >
                <h1>LasVegas</h1>
                <h3>123 properties</h3>
            </div>
        </div>
        <div className="featureditems">
            <img src="https://bstatic.com/xdata/images/xphoto/1182x887/161583114.jpg?k=7f20ebe082652cbcea13e4c52fa7de0ead05421c6d3c2b07eb168f3223886527&o=?size=S" alt="" />
           
            <div className='featureditemsTitle' >
                <h1>Dublin</h1>
                <h3>123 properties</h3>
            </div>
        </div>
    </div>
  )
}
