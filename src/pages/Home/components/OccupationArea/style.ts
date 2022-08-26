import styled from "styled-components";

// interface
import { IOcupationAreaConfig } from "./interface";

export const OccupationAreaContent = styled.section<IOcupationAreaConfig>`
  padding: 50px 0;
  background: white;
  background-image: ${({ backgroundImg }) =>
    backgroundImg && `url(${backgroundImg})`};
  background-position: top;
  background-size: 418px cover;
  background-repeat: no-repeat;
  h2 {
    text-align: center;
    margin: 0;
    font-size: 42px;
    color: var(--gold-color);
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 83px;
  /* transform: translateY(100px); */
`;
