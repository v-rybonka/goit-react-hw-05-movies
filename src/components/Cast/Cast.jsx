import { useState } from 'react';
// import PropTypes from 'prop-types';
import { fetchMovieCast } from 'api/api-movies';
import { useEffect } from 'react';
import { CastImg, CastItem, CastList } from './Cast.styled';
import potoPlaceholder from '../img/photo_placeholder.png';
import { useParams } from 'react-router-dom';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <CastList>
          {cast.map(({ name, character, profile_path, id }) => (
            <CastItem key={id}>
              {profile_path && (
                <CastImg
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                />
              )}
              {!profile_path && <CastImg src={potoPlaceholder} alt={name} />}
              <p>{name}</p>
              <p>Character: {character}</p>
            </CastItem>
          ))}
        </CastList>
      )}
    </>
  );
};

export default Cast;

// Cast.propTypes = {
//   id: PropTypes.string.isRequired,
// };
