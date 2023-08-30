import { Button, Container, FormContainer, Input, StyledHeader } from 'components/App.styled';
import React, { useState } from 'react';
// import { Form } from 'react-router-dom';

const SearchForm = ({onSubmit, searchParams}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
  if(!searchTerm){
  alert('no no no')
  return
  }
    onSubmit(searchTerm)
  };

  return (
    <Container>
      <StyledHeader>Search Movies</StyledHeader>
      <FormContainer onSubmit={handleSearch}>
        <Input
          type="text"
          value={searchTerm}
          onChange={ e => setSearchTerm(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </FormContainer>
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

