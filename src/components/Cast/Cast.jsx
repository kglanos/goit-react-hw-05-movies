import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  StyledCastsList,
  StyledCastsItem,
  StyledCastsImg,
} from './Cast.styled';
import Loader from 'components/Loader/Loader';
import NotFound from 'components/NotFound/NotFound';
import { getCastMovie } from '../../Api/Api';
const { useEffect } = require('react');

const Cast = () => {
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const defaultImg =
    'https://freepngimg.com/convert-png/130200-x-letter-hq-image-free';

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      setIsLoading(true);
      try {
        const response = await getCastMovie(movieId);
        setActors(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);
  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isLoading && <Loader />}

      <StyledCastsList>
        {actors &&
          actors.cast.map(({ id, profile_path, name, character }) => {
            return (
              <StyledCastsItem key={id}>
                <StyledCastsImg
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImg
                  }
                  alt={`${name}`}
                />
                <h4>{name}</h4>
                <p>Character: {character}</p>
              </StyledCastsItem>
            );
          })}
      </StyledCastsList>
      {(!actors || actors.cast.length <= 0) && <NotFound />}
    </>
  );
};
export default Cast;