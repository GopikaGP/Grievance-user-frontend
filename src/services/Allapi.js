import { commonApi } from './CommonApi';
import { serverUrl } from './sever';

// Register API
export const registerApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/signUp`, reqBody, "");
}

// Login API
export const loginApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/signIn`, reqBody, '');
}

// Submit a grievance
export const submitGrievanceApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/submit`, reqBody);
};

// Get all grievances (for dashboard)
export const getAllGrievancesApi = async () => {
    return await commonApi('GET', `${serverUrl}/api/grievances/all`);
};

// Delete a grievance (for superhero dashboard)
export const deleteGrievanceApi = async (id) => {
    return await commonApi('DELETE', `${serverUrl}/api/grievances/delete/${id}`);
};

// Update grievance status (for superhero dashboard)
export const updateGrievanceStatusApi = async (id, reqBody) => {
    return await commonApi('PUT', `${serverUrl}/api/grievances/edit/${id}`, reqBody);
};

// API call to get grievance by ID
export const getGrievanceByIdApi = async (id) => {
    return await commonApi('GET', `${serverUrl}/grievances/${id}`);
};

// API call to get grievance resolutions by ID
export const getResolutionsByGrievanceIdApi = async (id) => {
    return await commonApi('GET', `${serverUrl}/grievances/${id}/resolutions`);
};
