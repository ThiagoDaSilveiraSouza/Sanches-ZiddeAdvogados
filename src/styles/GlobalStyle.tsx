import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .centralizer{
    width: 800px;
    max-width: 90vw;
    margin: 0 auto;
  }
`;
