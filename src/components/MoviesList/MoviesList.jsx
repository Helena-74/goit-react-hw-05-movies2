import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {/* <MoviesList movies={movies}/> */}
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

