import React, { useState } from 'react';
import Lady from '../images/lady.png';
import '../page/style/submit.css';
import { submitGrievanceApi } from '../services/Allapi'; // Import the API function

function Submission() {
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    description: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await submitGrievanceApi(formData);
      setSuccessMessage('Grievance submitted successfully!');
      setErrorMessage('');
      setFormData({
        email: '',
        name: '',
        description: ''
      });
    } catch (error) {
      setErrorMessage('Failed to submit grievance. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h4 className='text-center pt-5'>From <span className='text-danger'>Darkness</span> to Light: Lumina’s Process</h4>

      <div className="row pt-5">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <img src={Lady} alt="Lumina" className="img-fluid" />
        </div>
        <div className="col-md-5">
          <div className="box px-4">
            <form onSubmit={handleSubmit}>
              <h4 className='text-center pt-3'>Submit Your Complaint</h4>

              {successMessage && <p className="text-success text-center">{successMessage}</p>}
              {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

              <div className='mt-3'>
                <input
                  type="email"
                  className='w-100 py-2 px-3 input_custom'
                  placeholder='Email'
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ color: "black" }}
                />
              </div>

              <div className='mt-3'>
                <input
                  type="text"
                  className='w-100 py-2 px-3 input_custom'
                  placeholder='Full Name'
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
              
                  style={{ color: "black" }}
                />
              </div>

              <div className='mt-3'>
                <textarea
                  className='w-100 py-2 px-3 input_custom'
                  placeholder='Detail'
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
             
                  style={{ color: "black" }}
                />
              </div>

              <button type="submit" className='btn btn-success w-100 mt-3 mb-3'>SUBMIT</button>
            </form>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default Submission;
