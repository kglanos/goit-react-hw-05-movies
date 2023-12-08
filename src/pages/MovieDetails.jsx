import { useState, Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import Loader from 'components/Loader/Loader';
import { getDetailsMovie } from '../Api/Api';
import MoviesDetailsDescribe from 'components/MoviesDetailsDescribe/MoviesDetailsDescribe';
const { useEffect } = require('react');

const MovieDetails = () => {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) return;
    const getFilms = async () => {
      setIsLoading(true);
      try {
        const response = await getDetailsMovie(movieId);
        setMovies(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFilms();
  }, [movieId]);

  return (
    <div>
      {error && <div>Try to reload the page</div>}
      {isLoading && <Loader />}
      <ButtonBack to={backLinkHref.current}> Go back </ButtonBack>
      <MoviesDetailsDescribe movies={movies} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;