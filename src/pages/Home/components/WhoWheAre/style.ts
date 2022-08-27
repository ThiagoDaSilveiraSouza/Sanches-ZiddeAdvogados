import styled from "styled-components";

export const WhoWheAreContent = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0 79px;
  justify-content: center;
  align-items: center;
`;

export const CardWhoWheAre = styled.div`
  padding: clamp(57px, 76vw, 76px) clamp(67.5px, 9vw, 90px);
  margin: 0;
  background-color: #a38334;
  max-width: 587px;
  min-height: 333px;
  top: 864px;
  font-size: 18px;
  color: white;
  transform: translateY(-74px);
  box-sizing: border-box;

  h2 {
    font-weight: 100;
    font-size: 19px;
    text-transform: uppercase;
    margin-top: 0;
  }
  hr {
    width: 34px;
    height: 3px;
    background: white;
    border: none;
    margin: 0;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    font-weight: 300;
  }
`;

export const CardPerformance = styled.div`
  width: 474px;
  max-height: 167px;
  justify-content: center;
  align-items: center;
  transform: translateY(-38px);

  p {
    font-size: 16px;
  }
`;
