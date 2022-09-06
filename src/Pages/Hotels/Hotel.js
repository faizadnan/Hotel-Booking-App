

import React from 'react'
import Singlehotel from '../../Components/Single_Hotel_Component/Singlehotel'
import './Hotel.css'
import Maillist from '../../Components/MailList/Maillist'
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Hotel() {

  const [openslider, setopenslider] = useState(false)
  const [sliderNumber, setsliderNumber] = useState(0)

  let photo = [{
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349224396.jpg?k=8e4f12246f849e5c699c732fa0372e002f91c7c433d20b8e7f652f6e6100292f&o=&hp=1"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349224396.jpg?k=8e4f12246f849e5c699c732fa0372e002f91c7c433d20b8e7f652f6e6100292f&o=&hp=1"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349224396.jpg?k=8e4f12246f849e5c699c732fa0372e002f91c7c433d20b8e7f652f6e6100292f&o=&hp=1"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349224396.jpg?k=8e4f12246f849e5c699c732fa0372e002f91c7c433d20b8e7f652f6e6100292f&o=&hp=1"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349224396.jpg?k=8e4f12246f849e5c699c732fa0372e002f91c7c433d20b8e7f652f6e6100292f&o=&hp=1"
  }, {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349224396.jpg?k=8e4f12246f849e5c699c732fa0372e002f91c7c433d20b8e7f652f6e6100292f&o=&hp=1"
  }]


const handleopen=(i)=>{
  setsliderNumber(i);
   setopenslider(true);
}

function handlMove(direction){

  let newSliderNumber;
    if(direction==="l"){
      newSliderNumber = sliderNumber === 0? 5 : sliderNumber-1

    }else{
      newSliderNumber = sliderNumber === 5? 0 : sliderNumber+1
    }

    setsliderNumber(newSliderNumber);

}

  return (<>
  <div>
      <Singlehotel></Singlehotel>
    </div>
  
  <div className='outerdivv'>  

    
           {/* //div for the modal */}
    {openslider && <div className="slider">
   <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=> setopenslider(false)}></FontAwesomeIcon>
   <FontAwesomeIcon icon={faCircleArrowLeft} className='slide' onClick={()=>handlMove('l')}></FontAwesomeIcon>
   <div className="sliderwrapper">
     <img src={photo[sliderNumber].src} className="sliderimage" />
   </div>
   <FontAwesomeIcon icon={faCircleArrowRight}  className='slide' onClick={()=>handlMove('r')}></FontAwesomeIcon>

   </div>}  

  
    
      <div className='innerdivv'>

     

        <div className='row1wrapper'>
         

          <div className='address'>
            <div className='addressdetails'>
              <h3>Tower Street apartments</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur  Non laboriosam esse sit
              </span>
            </div>

            <div><button className='reservebtn'>
              Reserve or Book Now!
            </button></div>
          </div>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <span>Lorem ipsum dolor sit amet adsajdkdaa  Lorem, ipsum dolor.</span>
        </div>


        <div className='row2wrapper'>
          
           
   
          <div className='imagesdiv'>
          
    

            {photo.map((photos,i) => (

              <div className='images'>
                <img onClick={()=>handleopen(i)} src={photos.src} alt="" />

              </div>

            )

            )}

          </div>
        </div>

        <div className='row3wrapper'>

          <div className='row3col1'>

            <h3>Stay in heart of Lorem</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt alias suscipit minima ratione explicabo aperiam reiciendis id totam, libero debitis, quaerat harum dignissimos aspernatur exercitationem? Laudantium ipsa quibusdam odio vitae maiores cupiditate, tempore incidunt sed temporibus tempora nostrum reiciendis. Itaque nam, blanditiis dicta voluptatem similique quod iste soluta voluptates dignissimos.</p>

          </div>
          <div className='row3col2'>

            <h4>Perfect for 7 night stay</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae, nisi quaerat obcaecati alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus vero sit et minus possimus, quae laudantium quisquam eaque asperiores?</p>

            <span><strong>$987 (7 nights)</strong></span>

            <button className='reservebtn'>
              Reserve or Book Now!
            </button>

          </div>

        </div>




      </div>


    </div>
    <Maillist></Maillist>
    <Footer></Footer>


  </>
  )
}
