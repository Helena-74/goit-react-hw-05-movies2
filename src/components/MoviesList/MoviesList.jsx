import { StyledLi, StyledLink, StyledUl } from 'components/App.styled';
import React from 'react';

const MoviesList = ({ movies }) => {
  return (
    <StyledUl>
      {movies.map(movie => (
        <StyledLi key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default MoviesList;

