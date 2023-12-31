import { getTrending } from '../Api/Api';
import Loader from 'components/Loader/Loader';
import Title from 'components/Title/Title';
import MoviesList from 'components/MoviesList/MoviesList';

const { useEffect, useState } = require('react');

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
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
      {isLoading && <Loader />}
      <Title title="Trending today" />
      <MoviesList movies={trendingMovies} />
    </div>
  );
};
export default Home;