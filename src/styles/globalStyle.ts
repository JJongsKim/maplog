import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: welcome;
    font-weight: 400;
    src: url('/fonts/welcome_regular.ttf');
  }

  @font-face {
    font-family: welcome;
    font-weight: 500;
    src: url('/fonts/welcome_regular.ttf');
  }

  @font-face {
    font-family: welcome;
    font-weight: 600;
    src: url('/fonts/welcome_bold.ttf');
  }


  * {
    color: ${theme.color.text};
    box-sizing: border-box;
    font-family: 'welcome', sans-serif;
  }

  html, 
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  button {
    background-color: transparent none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  a,
  a:hover,
  a:focus,
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    display: inline-block;
  }

  ul,
  li {
    list-style: none;
  }

  span,
  label {
    display: inline-block;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
