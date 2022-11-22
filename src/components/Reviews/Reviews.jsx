import { fetchMovieReviews } from 'api/api-movies';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ReviewsText, ReviewsTitle } from './Reviews.styled';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchMovieReviews(id).then(setReviews);
  }, [id]);
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <div>
                <ReviewsTitle>Author: {author}</ReviewsTitle>
                <ReviewsText>{content}</ReviewsText>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no reviews yet!</p>
      )}
    </>
  );
};

export default Reviews;

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};
