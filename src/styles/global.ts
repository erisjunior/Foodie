import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    z-index: 1;
    overflow: hidden;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialised;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
    color: #484848;
  }

  a {
    text-decoration: none;
    color: #FF9F0D;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
