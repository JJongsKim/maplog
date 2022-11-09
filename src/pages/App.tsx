import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { theme } from '../styles/theme';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/globalStyle.css';

import Main from './main';
import MaplogMain from './maplog-main';
import SignIn from './sign-in';
import SignUp from './sign-up';
import WritingLog from './writing-log';
import Logmap from './logmap';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const kakao: any;
}

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
          <Route path="/logmap" element={<Logmap />} />
        </Routes>
      </Router>
      <MaplogToast
        containerId="maplogToast"
        limit={1}
        hideProgressBar
        closeButton={false}
        autoClose={2000}
        enableMultiContainer
        position="bottom-center"
      />
      <AlertToast
        containerId="alertToast"
        limit={1}
        hideProgressBar
        closeButton={false}
        autoClose={1500}
        enableMultiContainer
        position="top-center"
      />
    </ThemeProvider>
  );
}

const MaplogToast = styled(ToastContainer)`
  text-align: center;
  font-weight: 700;
  font-size: 22px;

  .Toastify__toast {
    width: 350px;
    height: 140px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.primary.babypink};
  }
`;

const AlertToast = styled(ToastContainer)`
  text-align: center;
  font-weight: 700;
  font-size: 22px;

  .Toastify__toast {
    width: 400px;
    height: 100px;
    border-radius: 5px;
  }
`;

export default App;
