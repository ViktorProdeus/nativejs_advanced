import axios from 'axios';

const configOMB = {
    baseURL: 'https://www.omdbapi.com',
};
const key = '?apikey=81da5b61';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `${key}&s=${title}`;
        return axiosInstance.get(query);
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
