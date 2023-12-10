import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '38184382f7c1e49ee2a98f8aa87aa3f4';

axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

axios.defaults.baseURL = BASE_URL;

export const getTrending = async () => {
  const response = await axios.get('trending/all/day');
  return response.data;
};

export const getSearchMovies = async query => {
  const response = await axios.get(`search/movie?query=${query}`);
  return response.data.results;
};

export const getDetailsMovie = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};

export const getCastMovie = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`);
  return response.data;
};

export const getReviewsMovie = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`);
  return response.data.results;
};