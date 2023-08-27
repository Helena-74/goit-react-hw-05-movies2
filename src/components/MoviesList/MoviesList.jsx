import { StyledLi, StyledLink, StyledPoster, StyledUl } from 'components/App.styled';
import React from 'react';

const MoviesList = ({ movies }) => {

  
  return (
    <StyledUl>
      {movies.map(movie => (
        <StyledLi key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
          {/* <StyledPoster src={`https://image.tmdb.org/t/p/w500${movie.id.poster_path}`} alt={`${movie.title} Poster`} /> */}
          <StyledPoster src={`https://image.tmdb.org/t/p/w500${movie.id.poster_path}`} width="200" height="300" />
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default MoviesList;

