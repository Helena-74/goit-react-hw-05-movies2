import { Link } from 'react-router-dom';
import styled from 'styled-components';

// export const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: Arial, sans-serif;
//     margin: 0;
//     padding: 0;
//     background-color: #f0f0f0;
//   }
// `;

// export const AppContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
// `;

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


export const StyledHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StyledHead = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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

// export const Paragraf = styled.p`
  
// `