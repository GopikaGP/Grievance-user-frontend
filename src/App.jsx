import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import AboutUS from './page/AboutUS';
import Submission from './page/Submission';
import Header from './components/Header';
import Footer from './components/Footer';

// import PrivateRoute from './page/PrivateRoute'; // Import the PrivateRoute component

function App() {
  return (
    <>
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUS />} /> {/* Updated to match the AboutUS component */}
        <Route path="/Complaint" element={<Submission />}  />
        {/* <Route path="/status-check/:id" element={<PrivateRoute element={<GrievanceStatus />} />} /> */}
       

      </Routes>
      <Footer />
    </>
  );
}

export default App;
