import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const API_KEY = '3e23bc4805601b1fb14b53b3b99dcd05'

export const fetchPopularMovies = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`)
    return response.data.results;
}

export const fetchSearchMovie = async (query) => {
  const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
  return response.data.results;
}

export const fetchMovieDetails = async(id) => {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`)
    return response.data;
}

export const fetchMovieCast = async (id) => {
    const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    return response.data.cast
}

export const fetchMovieReviews =async (id) => {
    const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    return response.data.results
}