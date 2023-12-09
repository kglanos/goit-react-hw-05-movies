import React from 'react';
import {
  StyleDetailsDescribe,
  LinkListCastReviews,
  StyledLinkCastReviews,
} from './MoviesDetailsDescribe.styled';

const MoviesDetailsDescribe = ({ movies }) => {
  return (
    <StyleDetailsDescribe>
      <div>
        {movies.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            alt={`${movies.original_title} poster`}
            width="250"
          />
        ) : (
          <p>No poster available</p>
        )}
        <h3> See more...</h3>
        <LinkListCastReviews>
          <li>
            <StyledLinkCastReviews to="cast">cast</StyledLinkCastReviews>
          </li>
          <li>
            <StyledLinkCastReviews to="reviews">reviews</StyledLinkCastReviews>
          </li>
        </LinkListCastReviews>
      </div>
      <div>
        <h2>{movies.title}</h2>
        <p>({movies.original_title})</p>

        <h2>Overview</h2>
        <p>{movies.overview}</p>
        <h2>Genres</h2>
        <ul>
          {movies.genres &&
            movies.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
    </StyleDetailsDescribe>
  );
};

export default MoviesDetailsDescribe;