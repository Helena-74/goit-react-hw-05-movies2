import { Button, Container, Input, StyledHeader } from 'components/App.styled';
import React, { useState } from 'react';
import { Form, useSearchParams } from 'react-router-dom';

const SearchForm = (onSubmit) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ search: searchTerm });
  };

  return (
    <Container>
      <StyledHeader>Search Movies</StyledHeader>
      <Form onSubmit={handleSearch}>
        <Input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
    </Container>
  );
};

export default SearchForm;


// import { Button, Container, Input, StyledHeader } from 'components/App.styled';
// import React, { useState } from 'react';
// import { Form, useNavigate } from 'react-router-dom';

// const SearchForm = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     navigate(`/movies?search=${searchTerm}`);
//   };

//   return (
//     <Container>
//       <StyledHeader>Search Movies</StyledHeader>
//       <Form>
//         <Input
//           type="text"
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//         />
//         <Button onClick={handleSearch}>Search</Button>
//       </Form>
//     </Container>
//   );
// };

// export default SearchForm;

