import styled from "styled-components";

// interface
import { IOcupationAreaConfig } from "./interface";

export const OccupationAreaContent = styled.section<IOcupationAreaConfig>`
  /* padding: 50px 0; */
  padding-top: -95px;
  margin-bottom: 95px;
  border: 1px solid black;
  background: white;
  background-image: ${({ backgroundImg }) =>
    backgroundImg && `url(${backgroundImg})`};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  .centralizer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    transform: translateY(83px);
    h2 {
      text-align: center;
      margin: 0;
      font-size: 47px;
      color: var(--gold-color);
      font-family: var(--secondary-font);
    }
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  /* margin-top: 83px; */
  /* transform: translateY(83px); */
`;
