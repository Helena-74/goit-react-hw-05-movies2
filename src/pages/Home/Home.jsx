import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, BASE_URL } from 'components/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(`${BASE_URL}/trending/get-trending?api_key=${API_KEY}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
  
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;