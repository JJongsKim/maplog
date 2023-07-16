import { ThemeProvider } from 'styled-components';

import Test from './pages/Test';
import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Test />
      </ThemeProvider>
    </div>
  );
}

export default App;
