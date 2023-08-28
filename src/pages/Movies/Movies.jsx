import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { Container } from 'components/App.styled';
import { useSearchParams } from 'react-router-dom';
// import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
  const query = searchParams.get('query')
  console.log(query )
  },[searchParams])

  const handleSearch = (query) => {
  setSearchParams({query})
  };
  return (
    <Container>
      <SearchForm onSubmit={handleSearch}/> 
      {/* <MoviesList movies={[]} />  */}
      {/* <h2>Search Movies</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button> */}
    </Container>
  );
};

export default Movies;

