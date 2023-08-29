import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'components/api';
import { Container, NoPoster, StyledHeader, StyledLi, StyledPoster, StyledUl } from 'components/App.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error("Error fetching cast details:", error);
      }
    };
  
    fetchCast();
  }, [movieId]);

  return (
    <Container>
      <StyledHeader>Cast</StyledHeader>
      
      {cast && cast.map(({ profile_path, name, character, id }) => (
        <StyledUl key={id}>
        <StyledPoster
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : (
              <NoPoster />
            )
        }
        width={100}
        
      />
        <StyledLi>
          <p>{name}</p>
          <p>Character: {character}</p>
        </StyledLi>
      
      </StyledUl>
      ))}
    </Container>
  );
};

export default Cast;

