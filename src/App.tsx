import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { StyledLink } from './components/testLink.style';

function App() {
  const GlobalStyle = createGlobalStyle`
    ${reset}
    `;
  return (
    <Container className='App'>
      <GlobalStyle />
      <h1>App</h1>
      <StyledLink to='components'>Go to components page</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 15px;
`;

export default App;
