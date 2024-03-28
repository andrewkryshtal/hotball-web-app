import styled, { ThemeProvider } from 'styled-components';
import { StyledLink } from './components/testLink.style';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container className='App'>
        <StyledLink to='components'>Go to components page</StyledLink>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  margin: 0 15px;
`;

export default App;
