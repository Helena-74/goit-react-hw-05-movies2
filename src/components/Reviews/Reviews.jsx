import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'components/api';
import { Container, StyledHeader, StyledLi, StyledUl } from 'components/App.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
  
    fetchReviews();
  }, [movieId]);

  return (
    <Container>
      <StyledHeader>Reviews</StyledHeader>
      <StyledUl>
        {reviews && reviews.map(review => (
          <StyledLi key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </StyledLi>
        ))}
      </StyledUl>
    </Container>
  );
};

export default Reviews;

