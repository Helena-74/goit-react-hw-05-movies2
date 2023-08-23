import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StyledHead = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  padding: 5px 10px;
  color: black;
  display: inline-block;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #f50909;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 20px;
  margin-right: 20px;
  color: black;
  display: inline-block;
  font-size: 20px;
  border: 1px solid blue;
  border-radius: 6px;
  
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #ffffff;
    background-color: #0a0acc ;
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledLi = styled.li`
  margin-bottom: 10px;
`;

export const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin: 20px;
`;

export const FormContainer = styled.form`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledPoster = styled.img`
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
`;

// export const Paragraf = styled.p`
  
// `


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

