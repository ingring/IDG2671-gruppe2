import axios from '../axios/axios'

export async function getAPI(url) {
    try {
        const response = await axios.get(`api/${url}`)

        // If the response status is ok, parse the response body and return it
        const result = await response.data;
        return result;
        
    } catch (error) {
        // If an error occurs during the API request, log the error and return null
        console.error(error);
        return null;
    } 
}