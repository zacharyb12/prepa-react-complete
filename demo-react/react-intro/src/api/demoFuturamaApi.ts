import axios from "axios" 

const axiosClient = axios.create({
    baseURL: 'https://api.sampleapis.com/futurama',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const fetchFuturama = {
    characters: () => axiosClient.get('/characters'), 
    episodes: () => axiosClient.get('/episodes') 
}