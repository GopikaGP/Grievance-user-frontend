// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getGrievanceByIdApi } from '../services/Allapi';

// function GrievanceStatus() {
//   const { id } = useParams(); // If you're passing the ID in the URL (e.g., /status-check/:id)
//   const [grievance, setGrievance] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // First check if the ID is in the URL
//     const grievanceId = id || localStorage.getItem('grievanceId'); // Retrieve from URL or localStorage
//     if (grievanceId) {
//       fetchGrievanceStatus(grievanceId);
//     } else {
//       setError('Grievance ID is missing.');
//     }
//   }, [id]);

//   const fetchGrievanceStatus = async (grievanceId) => {
//     try {
//       const response = await getGrievanceByIdApi(grievanceId); // Pass the correct ID
//       if (response.status === 200) {
//         setGrievance(response.data);
//       } else {
//         setError('No grievances found for this ID.');
//       }
//     } catch (error) {
//       setError('An error occurred while fetching grievance status.');
//     }
//   };

//   return (
//     <div>
//       <h2>Grievance Status</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {grievance && (
//         <div>
//           <p><strong>Description:</strong> {grievance.description}</p>
//           <p><strong>Status:</strong> {grievance.status}</p>
//           <h3>Resolutions:</h3>
//           {grievance.resolutions && grievance.resolutions.length > 0 ? (
//             <ul>
//               {grievance.resolutions.map((resolution) => (
//                 <li key={resolution._id}>
//                   <p><strong>Response:</strong> {resolution.response}</p>
//                   <p><strong>Date:</strong> {new Date(resolution.date).toLocaleString()}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No resolutions found for this grievance.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default GrievanceStatus;
