import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchPopularMovies } from '../../../api/api-movies';
import {
  MoviesItem,
  MoviesItemImage,
  MoviesList,
  MoviesNavLink,
  MoviesText,
  Text,
  TitleMovies,
} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchPopularMovies().then(movies => setMovies(movies));
  }, []);

  if (!movies) {
    return;
  }
  return (
    <>
      <TitleMovies>Trending now</TitleMovies>
      <MoviesList>
        {movies.map(({ id, title, release_date, poster_path }) => {
          return (
            <MoviesItem key={id}>
              <MoviesNavLink to={`/movies/${id}`}>
                <MoviesItemImage
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt=""
                />
                <MoviesText>{title}</MoviesText>
              </MoviesNavLink>

              <Text>{release_date}</Text>
            </MoviesItem>
          );
        })}
      </MoviesList>
    </>
  );
};
export default Home;
Home.propTypes = {
  movies: PropTypes.array,
};
