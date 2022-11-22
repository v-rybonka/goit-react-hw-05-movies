import { fetchMovieDetails } from 'api/api-movies';
import { lazy, Suspense } from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import poster from '../../img/placeholder_poster.jpeg';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import {
  Container,
  LinkBtn,
  LinkNav,
  Text,
  TextTitle,
  Title,
  Wrapper,
  WrapperText,
} from './MoviesDetails.styled';

const Cast = lazy(() => import('../../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../../components/Reviews/Reviews'));

const INITIAL_DATA = {
  title: '',
  poster_path: '',
  vote_average: '',
  overview: '',
  genres: [],
};

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(INITIAL_DATA);
  const location = useLocation();
  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie).catch('error');
  }, [movieId]);

  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <Container>
      <LinkBtn to={location.state?.from ?? '/'}>Go Back</LinkBtn>
      <Wrapper>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : poster
          }
          alt={title}
        />
        <WrapperText>
          <Title>{title}</Title>
          <Text>User score: {vote_average * 10} %</Text>
          <TextTitle>Overview</TextTitle>
          <Text>{overview}</Text>
          <TextTitle>Genres</TextTitle>
          <Text>{genres.map(genre => genre.name).join(', ')}</Text>
        </WrapperText>
      </Wrapper>
      <ul>
        Additional information
        <li>
          <LinkNav to="cast" state={{ from: location.state?.from ?? '/' }}>
            Cast
          </LinkNav>
        </li>
        <li>
          <LinkNav to="reviews" state={{ from: location.state?.from ?? '/' }}>
            Reviews
          </LinkNav>
        </li>
      </ul>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Routes>
          <Route path="cast" element={<Cast id={movieId} />} />
          <Route path="reviews" element={<Reviews id={movieId} />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
export default MovieDetails;

MovieDetails.propTypes = {
  id: PropTypes.string,
};
