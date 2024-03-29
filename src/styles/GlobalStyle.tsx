import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    
    /* font */
    --primary-font: 'Mukta', sans-serif;
    --secondary-font: 'Amiri', serif;
    
    /* color */
    --dark-color: #191919;
    --gold-color: #A38334;
    --gray-color: #E8E8E8;
    --gray-color-2: #707070;


  }
  html{
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    font-family:var(--primary-font);
    /* font-size: 62.5%; */
    
  }
  .centralizer{
    width: 1140px;
    max-width: 90vw;
    margin: 0 auto;
  }
`;
