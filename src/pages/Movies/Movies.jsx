import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SearchForm from 'components/SearchForm/SearchForm';
import { Container } from 'components/App.styled';
import { useSearchParams } from 'react-router-dom';
import { BASE_URL, API_KEY } from 'components/api';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovies();
  }, [query]);

  // useEffect(() => {
  //   const query = searchParams.get('query');
  //   console.log(query);
  // }, [searchParams]);

  // const handleSearch = query => {
  //   setSearchParams({ query });
  // };
  function setSearchTerm(newQuery) {
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  }
  return (
    <>
      {' '}
      <Container>
        {/* <SearchForm onSubmit={handleSearch} /> */}

        <form action="">
          <label>
            <p>Search Movies</p>
            <input
              type="text"
              value={query}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </Container>
      <Container>
        <MoviesList movies={movies} />
      </Container>
    </>
  );
};

export default Movies;

