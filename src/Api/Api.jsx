import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '38184382f7c1e49ee2a98f8aa87aa3f4';

export const getTrending = async () => {
    const response = await axios.get(
      `${BASE_URL}trending/all/day?api_key=${API_KEY}&language=en-US`
    );
    return await response.data;
  };
  
  export const getSearchMovies = async query => {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
    );
    return response.data.results;
  };
  export const getDetailsMovie = async movieId => {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  };
  export const getCastMovie = async movieId => {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  };
  
  export const getReviewsMovie = async movieId => {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data.results;
  };