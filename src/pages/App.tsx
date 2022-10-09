import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import '../styles/globalStyle.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>웰컴체로 잘 나오고 있나 ?</h1>
    </ThemeProvider>
  );
}

export default App;
