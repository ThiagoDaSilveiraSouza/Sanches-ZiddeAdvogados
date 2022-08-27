import styled from "styled-components";

export const CredentialsContent = styled.section`
  padding: 120px 0;

  > .centralizer {
    display: flex;
    flex-wrap: wrap;
    gap: 43px;
    justify-content: center;
    align-items: center;
  }
`;

export const ImgContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;  
  img{
    max-width: 100%;
  }
`;
export const TextCredentialsContent = styled.section`
  h2 {
    margin: 0;
    padding: 0;
    font-size: 28px;
    font-family: var(--secondary-font);
    color: #191919;
  }
  h5 {
    padding: 0;
    margin: 0;
    margin-top: 5px;
    font-size: 15px;
  }
  hr {
    padding: 0;
    margin: 0;
    margin-inline-start: -78px;
    height: 1px;
    width: 100%;
    max-width: 539px;
    background: #a38334;
    opacity: 1;

    @media (max-width: 1069px) {
      margin-inline-start: 0;
    }
  }
  p {
    padding: 0;
    max-width: 622px;
    font-size: 15px;
  }
`;
