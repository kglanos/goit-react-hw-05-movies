import React, { useState, useEffect } from 'react';
import { StyledMovList, StyledLink, StyledUl, StyledImg } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    const location = useLocation();
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const filteredData = movies.map(({ id, title, name, poster_path }) => ({
                id,
                title: title || name,
                poster: poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Question_mark.svg/1200px-Question_mark.svg.png',
            }));

            setFilteredMovies(filteredData);
        } catch (error) {
            setError(error);
        }
    }, [movies]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <StyledMovList>
            <>
                {filteredMovies.map(({ id, title, poster }) => (
                    <StyledUl key={id}>
                        <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                            <StyledImg
                                src={poster}
                                alt={`Poster of ${title}`}
                            />
                            <p>{title}</p>
                        </StyledLink>
                    </StyledUl>
                ))}
            </>
        </StyledMovList>
    );
};

export default MoviesList;