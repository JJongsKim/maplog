import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import '../styles/globalStyle.css';

import Main from './main';
import MaplogMain from './maplog-main';
import SignIn from './sign-in';
import SignUp from './sign-up';
import WritingLog from './writing-log';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/maplog-main" element={<MaplogMain />} />
          <Route path="/writing-log" element={<WritingLog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
