import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyledReviews } from './Reviews.styled';
import { getReviewsMovie } from '../../Api/Api';
import NotFound from 'components/NotFound/NotFound';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      setIsLoading(true);
      try {
        const response = await getReviewsMovie(movieId);
        setReviews(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isloading && <Loader />}

      {reviews &&
        reviews.map(({ id, author, content }) => {
          return (
            <StyledReviews key={id}>
              <li>
                <b> Author: {author}</b>
              </li>
              <li>{content}</li>
            </StyledReviews>
          );
        })}
      {(!reviews || reviews.length <= 0) && <NotFound />}
    </>
  );
};
export default Reviews;