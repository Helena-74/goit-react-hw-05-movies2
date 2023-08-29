import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'components/api';
import { Container, StyledHeader, StyledLi, StyledUl } from 'components/App.styled';

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
      <StyledUl>
      {cast && cast.map(actor => (
        <StyledLi key={actor.id}>{actor.name}</StyledLi>
      ))}
      </StyledUl>
    </Container>
  );
};

export default Cast;

