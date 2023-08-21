import { StyledLi, StyledLink, StyledUl } from 'components/App.styled';
import React from 'react';
// import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <StyledUl>
      {/* <MoviesList movies={movies}/> */}
      {movies.map(movie => (
        <StyledLi key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default MoviesList;

