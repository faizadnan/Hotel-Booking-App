

import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import './List.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import Searchlist from '../../Components/SearchList/Searchlist';
import Maillist from '../../Components/MailList/Maillist';
import Footer from '../../Components/Footer/Footer';



export default function List() {

  const location = useLocation();
  const [destination, setdestination] = useState(location.state.destination);
  const [date, setdate] = useState(location.state.date);
  const [options, setoptions] = useState(location.state.options);
  const [opendate, setopendate] = useState(false);


  return (
    <>
      <div><Navbar></Navbar><Header type="list"></Header></div>

      <div className="outerdiv">
        <div className="innerdiv">
          <div className="searchdiv">
            <h2>Search</h2>

            <div className='searchitem'>
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className='searchitem'>
              <label htmlFor="">Chek-in Date</label>
              <span onClick={() => setopendate(!opendate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>

              {opendate && <DateRange
                onChange={item => setdate([item.selection])}
                ranges={date}
                minDate={new Date()}
              />}

              <div className='searchitem'>
                <h3 id='options'>Options</h3>
                <div className='searchoptionitems'>
                  <span>Adult <small>per night</small></span>
                  <input type="number" min={1} placeholder={options.adult} />
                </div>

                <div className='searchoptionitems'>
                  <span>Min Price <small>per night</small></span>
                  <input type="text" />
                </div>

                <div className='searchoptionitems'>
                  <span>Children <small>per night</small></span>
                  <input type="number" min={0} placeholder={options.children} />
                </div>

                <div className='searchoptionitems'>
                  <span>Room <small></small></span>
                  <input type="number" min={1} placeholder={options.rooms} />
                </div>
              </div>

            </div>
            <button id='searchbutton'>Search</button>
          </div>
         
          <div className="searchresultdiv">
          <Searchlist></Searchlist>
          <Searchlist></Searchlist>
          <Searchlist></Searchlist>
          <Searchlist></Searchlist>
          <Searchlist></Searchlist>
          <Searchlist></Searchlist>
          <Searchlist></Searchlist>
          <Searchlist></Searchlist>
          <Searchlist></Searchlist>
          
          </div>
         
        </div>
       
      </div>
      <Maillist></Maillist>
      <Footer></Footer>
    </>
  )
}
