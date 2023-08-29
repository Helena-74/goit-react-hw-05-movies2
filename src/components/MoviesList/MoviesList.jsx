import {
  StyledLi,
  StyledLink,
  StyledPoster,
  StyledUl,
  StyledTitle,
  NoPoster,
} from 'components/App.styled';
import React from 'react';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledUl>
      {movies.map(({ id, title, poster_path }) => (
        <StyledLi key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {/* <StyledPoster src={`https://image.tmdb.org/t/p/w500${movie.id.poster_path}`} alt={`${movie.title} Poster`} /> */}
            {poster_path ? (
              <StyledPoster
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                width="200"
                height="300"
              />
            ) : (
              <NoPoster />
            )}

            <StyledTitle>{title}</StyledTitle>
          </StyledLink>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default MoviesList;

