import { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieCast } from 'api/api-movies';
import { useEffect } from 'react';
import { CastImg, CastItem, CastList } from './Cast.styled';
import potoPlaceholder from '../img/photo_placeholder.png';
const Cast = ({ id }) => {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    fetchMovieCast(id).then(setCast);
  }, [id]);

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

Cast.propTypes = {
  id: PropTypes.string.isRequired,
};
