import { Button, Container, Input, StyledHeader } from 'components/App.styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/movies?search=${searchTerm}`);
  };

  return (
    <Container>
      <StyledHeader>Search Movies</StyledHeader>
      <Input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Container>
  );
};

export default SearchForm;

