

import React from 'react'
import { faBed, faCalendarDays, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';


export default function Header({type}) {

    const [destination, setdestination] = useState("")

    const [opendate, setOpendate] = useState(false);
    function dateopenHandler() {
        setOpendate(!opendate);
    }
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openoptions, setopenoptions] = useState(false);

    function optionsopenHandler() {
        setopenoptions(!openoptions);
    }

    //Taking state with initial values in as object
    const [options, setoptions] = useState(
        {
            adult: 1,
            children: 0,
            rooms: 1,
        }
    )

    function handleoptionbutton(name, operation) {

        setoptions(prev => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })

    }

    const navigate = useNavigate();

    function handlesearch(){
        navigate("/hotels", {state:{destination, date, options}})
    }
    
    return (
        <div className={type === "list" ? 'header listmode' : "header"}>
            <div className='innerheaderdiv'>
                <div className='headerlist'>

                    <div className='listitem'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>

                    <div className='listitem'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Car Rentals</span>
                    </div>

                    <div className='listitem'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>

                    <div className='listitem'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>

                    <div className='listitem'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>


                </div>
               { type !=="list" && <>  <h1>Find your next stay.</h1>
                <span>Search deals on hotels, homes, and much more...</span>
                <button>Signin/Register</button>

                <div className='headersearch'>

                    <div className='headersearchitem'>

                        <FontAwesomeIcon icon={faBed} className="headersearchicon" />
                        <input type="text" placeholder='Where are you going' className='headersearchinput' onChange={(event)=>{
                            setdestination(event.target.value)
                        }}/>
                    </div>

                    <div className='headersearchitem'>

                        <FontAwesomeIcon icon={faCalendarDays} className="headersearchicon" />
                        <span onClick={dateopenHandler}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
                        {opendate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                        />}
                    </div>

                    <div className='headersearchitem'>

                        <FontAwesomeIcon icon={faPerson} className="headersearchicon" />
                        <span onClick={optionsopenHandler}>{`${options.adult} adult ~ ${options.children} children ~ ${options.rooms} rooms`}</span>
                        {openoptions && <div className='options'>
                            <div className='optionitems'>
                                <span>Adult</span>
                                <div className='personcontrolbutton'>
                                    <button onClick={() => handleoptionbutton("adult", "i")}>+</button>
                                    <span>{options.adult}</span>
                                    <button onClick={() => handleoptionbutton("adult", "d")}
                                        disabled={options.adult <= 1}>-</button>


                                </div>
                            </div>
                            <div className='optionitems'>
                                <span>Children</span>
                                <div className='personcontrolbutton'>
                                    <button onClick={() => handleoptionbutton("children", "i")}>+</button>
                                    <span>{options.children}</span>
                                    <button onClick={() => handleoptionbutton("children", "d")}
                                        disabled={options.children <= 0}>-</button>
                                </div>
                            </div>
                            <div className='optionitems'>
                                <span>Rooms</span>
                                <div className='personcontrolbutton'>
                                    <button onClick={() => handleoptionbutton("rooms", "i")}>+</button>
                                    <span>{options.rooms}</span>
                                    <button onClick={() => handleoptionbutton("rooms", "d")}
                                        disabled={options.rooms <= 1}>-</button>
                                </div>

                            </div>
                        </div>}
                    </div>
                    <div className='headersearchitem'>
                        <button onClick={handlesearch}>Search</button>
                    </div>
                </div></>}
              
            </div>
        </div>
    )
}
