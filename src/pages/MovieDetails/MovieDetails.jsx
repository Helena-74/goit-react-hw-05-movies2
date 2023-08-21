import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'components/api';
import { Container, StyledHeader } from 'components/App.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
  
    fetchMovieDetails();
  }, [movieId]);

  return (
    <Container>
      <StyledHeader>{movieDetails.title}</StyledHeader>
      <p>{movieDetails.overview}</p>
    </Container>
  );
};

export default MovieDetails;

