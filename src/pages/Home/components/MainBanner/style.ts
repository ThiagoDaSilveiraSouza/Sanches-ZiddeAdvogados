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
    font-size: clamp(22.5px, 3vw, 30px);
    font-weight: 100;
    margin: 0;
    padding: 0;
    color: white;
  }
  h1 {
    max-width: 560px;
    margin: 0;
    padding-top: 10px;
    color: #a38334;
    font-size: clamp(48.75px, 6.5vw, 65px);
    line-height: clamp(54px, 7.2vw, 72px);
    padding-bottom: 30px;
    font-family: var(--secondary-font);
  }
`;
