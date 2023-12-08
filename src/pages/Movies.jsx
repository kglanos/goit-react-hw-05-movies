import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchMovies } from '../Api/Api';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query');

  const onFormSubmit = (e) => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value;
    setSearchParams({ query: value });
    e.target.reset();
  };

  useEffect(() => {
    if (!queryValue) return;
    const getFilms = async () => {
      setIsLoading(true);
      try {
        const response = await getSearchMovies(queryValue);
        setSearchMovies(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFilms();
  }, [queryValue]);

  return (
    <div>
      {error && <div>Try to reload the page</div>}
      {isLoading && <Loader />}
      <SearchForm onFormSubmit={onFormSubmit} />
      {searchMovies !== null && <MoviesList movies={searchMovies} />}
    </div>
  );
};

export default Movies;