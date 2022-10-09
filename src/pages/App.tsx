import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import '../styles/globalStyle.css';

import Main from './main';
import SignIn from './sign-in';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
