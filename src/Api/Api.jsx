import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '38184382f7c1e49ee2a98f8aa87aa3f4';

export const fetchTrendingMovies = async () => {
    try {
        const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.log('error', { error });
        return [];
    }
}

export const fetchMovieById = async (Id) => {
    try {
        const response = await axios.get(`/movie/${Id}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log('error', { error });
        return {};
    }
}

export const fetchMovieCast = async (Id) => {
    try {
        const response = await axios.get(`/movie/${Id}/credits?api_key=${API_KEY}`);
        return response.data.cast;
    } catch (error) {
        console.log('error', { error });
    }
}

export const fetchMovieReviews = async (Id) => {
    try {
        const response = await axios.get(`/movie/${Id}/reviews?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.log('error', { error });
    }
}

export const fetchMovieByQuery = async (query) => {
    try {
        const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
        return response.data.results;
    } catch (error) {
        console.log('error', { error });
    }
}

