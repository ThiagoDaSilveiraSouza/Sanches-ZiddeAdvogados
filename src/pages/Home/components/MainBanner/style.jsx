import styled from "styled-components";

export const MainBannerContent = styled.section`
  display: flex;
  flex: 1 1;
  background-image: url(bannerProvisorio.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 770px;
  align-items: center;
`;
export const TextContent = styled.div`
  p {
    font-size: calc(0.2em + 1vw);
    margin: 0;
    padding: 0;
    color: white;
  }
  h1 {
    margin: 0;
    padding-top: 10px;
    color: #a38334;
    font-size: calc(3em + 1vw);
    line-height: 110%;
    padding-bottom: 30px;
    font-family: var(--secondary-font);
  }
`;
