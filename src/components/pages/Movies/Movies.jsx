import { fetchSearchMovie } from 'api/api-movies';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchBar } from '../Searchbar/Searchbar';
import PropTypes from 'prop-types';
import { MoviesItem, MoviesList, MoviesNavLink } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query) {
      fetchSearchMovie(query).then(movies => setMovies(movies));
    }
  }, [searchParams]);

  const handleSearch = value => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {movies.length > 0 && (
        <MoviesList>
          {movies.map(({ id, title }) => (
            <MoviesItem key={id}>
              <MoviesNavLink to={`${id}`} state={{ from: location }}>
                {title}
              </MoviesNavLink>
            </MoviesItem>
          ))}
        </MoviesList>
      )}
    </div>
  );
};
export default Movies;
Movies.propTypes = {
  search: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
