import { getTrending } from '../Api/Api';
import Loader from 'components/Loader/Loader';
import Title from 'components/Title/Title';
import MoviesList from 'components/MoviesList/MoviesList';

import React, { useEffect, useState } from 'react';

const Home = () => {
  const [isloading, setIsLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      setIsLoading(true);
      try {
        const response = await getTrending();
        setTrendingMovies(prevState => [...prevState, ...response.results]);
      } catch (error) {
        setError(error.massage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrending();
  }, []);
  return (
    <div>
      {error !== null && <p> Ooops...Error massage: {error}</p>}
      {isloading && <Loader />}
      <Title title="Trending today" />
      <MoviesList movies={trendingMovies} />
    </div>
  );
};
export default Home;