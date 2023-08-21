import React from 'react';
// import { useNavigate } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { Container } from 'components/App.styled';
// import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const navigate = useNavigate();

  // const handleSearch = () => {
  //   navigate(`/movies?search=${searchTerm}`);
  // };

  return (
    <Container>
      <SearchForm /> 
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

