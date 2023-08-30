import React, { useEffect, useRef, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'components/api';
import { Container, StyledHeader, StyledPoster, StyledNavLink, StyledLink } from 'components/App.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const locationRef = useRef(location);

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

  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
    <Container>
        <StyledLink to={locationRef.current?.state?.from ?? '/'}>
          ← Back
        </StyledLink>
    </Container>
    <Container>
      <StyledHeader>{movieDetails.title}</StyledHeader>
      {/* <StyledPoster src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={`${movieDetails.title} Poster`} /> */}
      <StyledPoster src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : defaultImg } alt={`${movieDetails.title} Poster`} width="200"
                height="300" />
      <p>{movieDetails.overview}</p>
      <StyledNavLink to={`cast`}>Cast</StyledNavLink>
      <StyledNavLink to={`reviews`}>Reviews</StyledNavLink>
      <Outlet />
    </Container>
    </>
  );
};

export default MovieDetails;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { API_KEY, BASE_URL } from 'components/api';
// import { Container, StyledHeader } from 'components/App.styled';

// const MovieDetails = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState({});

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
//         const data = await response.json();
//         setMovieDetails(data);
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       }
//     };
  
//     fetchMovieDetails();
//   }, [movieId]);

//   return (
//     <Container>
//       <StyledHeader>{movieDetails.title}</StyledHeader>
//       <p>{movieDetails.overview}</p>
//     </Container>
//   );
// };

// export default MovieDetails;

