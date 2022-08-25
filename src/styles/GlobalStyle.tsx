import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --dark-color: #191919;
    --gold-color: rgb(163 131 52);
    --gray-color: #e8e8e8;
    --gray-color-2: rgb(232 232 232);
  }
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
