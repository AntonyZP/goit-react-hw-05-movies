import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = '534f0be7f0067dcfefc53724eb035425';

export const APItrendMovies = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data
}

export const APIsearchMovie = async (query) => {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
    return response.data
}

export const APImovieDetails = async id => {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`,          
    );
    return response.data
}

export const APImovieCredits= async (id) => {
    const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data
}

export const APImovieReviews= async (id) => {
    const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data
}
