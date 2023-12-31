import React, { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from 'components/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Container, StyledHeader, StyledUl } from 'components/App.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
        const data = await response.json();
        setTrendingMovies(data.results);
        console.log(data);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <Container>
      <StyledHeader>Trending Movies</StyledHeader>
      <StyledUl>
        <MoviesList movies={trendingMovies} />
      </StyledUl>
      
    </Container>
  );
};

export default Home;


// return (
//   <Container>
//     <StyledHeader>Trending Movies</StyledHeader>
//     <StyledUl>
//     {/* <StyledPoster src={`https://image.tmdb.org/t/p/w500${trendingMovies.poster_path}`} alt={`${trendingMovies.title} Poster`} /> */}
//       <MoviesList movies={trendingMovies} />
//       {/* {trendingMovies.map(movie => (
//         <li key={movie.id}>
//           <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//         </li>
//       ))} */}
//     </StyledUl>
    
//   </Container>
// );