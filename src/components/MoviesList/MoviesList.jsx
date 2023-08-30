import {
  StyledLi,
  StyledLink,
  StyledPoster,
  StyledUl,
  StyledTitle,
} from 'components/App.styled';
import React from 'react';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <StyledUl>
      {movies.map(({ id, title, poster_path }) => (
        <StyledLi key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            <StyledPoster src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg } width="200"
                height="300"/>
            <StyledTitle>{title}</StyledTitle>
          </StyledLink>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default MoviesList;


            // {/* <StyledPoster src={`https://image.tmdb.org/t/p/w200${movie.id.poster_path}`} alt={`${movie.title} Poster`} /> */}
            // {/* {poster_path ? (
            //   <StyledPoster
            //     src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            //     width="200"
            //     height="300"
            //   />
            // ) : (
            //   <NoPoster src={'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'}/>
            // )} */}