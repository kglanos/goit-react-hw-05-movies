import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchMovies } from '../Api/Api';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query');

  const onformSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value;
    setSearchParams({ query: value });
    e.target.reset();
  };

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
  
  useEffect(() => {
    if (queryValue) {
      getFilms();
    }
  }, [queryValue]);

  return (
    <div>
      {error && <div>Try to reload the page</div>}
      {isloading && <Loader />}
      <SearchForm onformSubmit={onformSubmit} />
      {searchMovies !== null && <MoviesList movies={searchMovies} />}
    </div>
  );
};
export default Movies;