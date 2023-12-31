import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,::before,::after{
    box-sizing: border-box;
  }

  html {
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  a {
    font: inherit;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

`;

export default GlobalStyle;
