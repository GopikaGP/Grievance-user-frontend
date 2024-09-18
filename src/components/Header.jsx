import React from 'react';

import './Header.css';

function Header() {
 
  // Handle logout functionality


  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg custom_nav ps-5" style={{ height: "70px" }}>
        <div className="container-fluid">
          <div>
            <a className="navbar-brand" href="/" style={{ color: "#f1f1f1", fontSize: "40px", fontFamily: "gabriola" }}>
              <span style={{ fontFamily: "polo",  color: "#8b0000" }}>L</span>UM
              <span style={{ fontFamily: "polo",  color: "#8b0000" }}>I</span>NA
            </a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto pe-5" style={{ color: "white" }}>
              <a className="nav-link active" style={{ color: "white" }} aria-current="page" href="/">Home</a>
              <a className="nav-link" style={{ color: "white" }} href="/aboutus">About Us</a>
              <a className="nav-link" style={{ color: "white" }} href="#">Contact</a>

           <a href='/Complaint'className='btn btn-success'>Grievance</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
