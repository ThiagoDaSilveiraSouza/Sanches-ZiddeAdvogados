import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    
    /* font */
    --primary-font: 'Mukta', sans-serif;

    /* color */
    --dark-color: #191919;
    --gold-color: #A38334;
    --gray-color: #E8E8E8;
    --gray-color-2: rgb(232 232 232);


  }
  body {
    margin: 0;
    padding: 0;
    font-family:var(--primary-font);
  }
  .centralizer{
    width: 1140px;
    max-width: 90vw;
    margin: 0 auto;
  }
`;
