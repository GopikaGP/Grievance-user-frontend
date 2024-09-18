import React from 'react';
import './style/about.css'

function AboutUS() {
  return (
    <div>
      <div className='d-flex flex-column justify-content-center align-items-center'>
      <h3 className='text-center pt-5'>About US</h3>
      <p className='text-center fs-5'style={{fontFamily:"Dancing Script"}} >"Welcome to the Light"</p>
      <p className='text-center w-50' style={{fontFamily:"Dancing Script" }}>"Lumina is more than a hero; she is a guardian of light, born from the celestial realm to protect the balance between light and darkness. In a world that often feels lost in shadows, Lumina stands as a beacon of hope. Her mission is clear: bring justice where there is chaos, and light where darkness reigns..."</p>
      </div>
      <p></p>
    <div className="container-fluid aboutus_section1_bg">
    <div className="row row_abtus">
      <div className="col-md-2"></div>
      <div className="col-md-4 abtright">
     
       <img src="https://i.gifer.com/origin/26/2634fc27137043ab4669be37a05643f0_w200.gif" alt="" width={'70%'}/>
      </div>
      <div className="col-md-4">
        <h3 className='text-center'> Lumina's Mission</h3>
        <p className='text-center'>"The Light You Need in Dark Times"</p>
        <p >At her core, Lumina’s mission is to safeguard the innocent, protect the vulnerable, and restore peace. She listens to every voice, understanding that even the smallest grievance can grow into a great injustice. Her duty is to bring light to these grievances, ensuring they are addressed with fairness and resolve.
        Whether it’s stopping a flood, tackling illegal activities, or resolving a community crisis, Lumina brings her unmatched strength and wisdom to make things right.</p>
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className="row pt-5">
      <h3 className='text-center'> A Call to Action</h3>
      <p className='fs-5 text-center' style={{fontFamily:"Dancing Script"}}>"Let Your Voice Be Heard"</p>
      <div className="col-md-2"></div>
      <div className="col-md-4 pt-5 pe-5">
         <p>If you have a grievance, don’t hesitate to reach out. Lumina’s light will shine on your problem and guide it toward a resolution. Whether it’s something personal or something affecting your community, Lumina is here to help.</p>
         <button className='btn btn-success'>Call To Action</button>
      </div>
      <div className="col-md-4 ps-5 pt-5">
       <img src="https://giffiles.alphacoders.com/216/216790.gif" alt="" width={'100%'}/> 
      </div>
      
      <div className="col-md-2"></div>
    </div>
    </div>
    </div>
  )
}

export default AboutUS