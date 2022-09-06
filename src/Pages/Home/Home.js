

import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Featured from '../../Components/Featured/Featured';
import './Home.css'
import Property from '../../Components/Property/Property';
import Homeguestlove from '../../Components/HomeGuestLove/Homeguestlove';
import Maillist from '../../Components/MailList/Maillist';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  return (
    <div><Navbar></Navbar>
    <Header></Header>

    <div className="homecontainer">
      <Featured></Featured>
      <div className='hometitle'>

      <h2>Browse By Property Type</h2>
      <Property></Property>

      </div>
      <div className='homeguest'>

      <h2>Homes guests love</h2>
        <Homeguestlove></Homeguestlove>

      </div>    
     
      
    </div>
    <Maillist></Maillist>
    <Footer></Footer>
   
    </div>
  )
}
