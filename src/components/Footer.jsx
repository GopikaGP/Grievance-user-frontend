import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
{/* <FontAwesomeIcon icon={faEye} flip style={{color: "#FFD43B",}} /> */}


function Footer() {
  return (
    <div className='row w-100 mt-5 p-3 mb-5'>
        <div className="col-md-4 p-4 ms-md-5  ">
        <h2 className='text-warning' style={{color:"#f1f1f1", fontSize:"40px",fontFamily:"gabriola"}}> <span style={{fontFamily:"polo", fontSize:"70px", color:"#8b0000"}}>L</span>UM<span style={{fontFamily:"polo", fontSize:"70px",color:"#8b0000"}}>I</span>NA</h2>
        <p style={{textAlign:'justify'}}className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eaque, magni accusamus dolores ab magnam nemo nulla laboriosam delectus facilis, tenetur ut harum. At iure similique velit, suscipit quae porro.</p>
        </div>
        <div className="col-md-2 p-4 d-md-flex justify-content-center">
            <div>
              <h4>Links</h4>
              <p className='mt-4'><Link style={{textDecoration:"none", color:"white"}} to={"/"}>Home</Link></p>
              <p><Link style={{textDecoration:"none", color:"white"}} to={"/home"}>Home Page</Link></p>
              <p><Link style={{textDecoration:"none", color:"white"}} to={"/watch-history"}>Watch History</Link></p>
            </div>
        </div>
      
        <div className="col-md-3 p-4">
          <h4>Contact Us</h4>
          <div className='d-flex mt-4'>
              <input type="text" className='form-control' placeholder='Email Id'/>
              <button className='btn btn-warning ms-3'>SubScribe</button>
          </div>
          <div className="d-flex mt-4 justify-content-between">
          <FontAwesomeIcon icon={faInstagram} size='2xl' />
          <FontAwesomeIcon icon={faFacebook} size='2xl' />
          <FontAwesomeIcon icon={faTwitter} size='2xl'/>
          <FontAwesomeIcon icon={faLinkedin} size='2xl' />
          </div>
        </div>
        <div className="col-md-1"></div>
    </div>
  )
}

export default Footer 