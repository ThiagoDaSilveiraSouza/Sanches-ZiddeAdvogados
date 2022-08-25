import styled from "styled-components";

// interface
import { IOcupationAreaConfig } from "./interface";

export const OccupationAreaContent = styled.section<IOcupationAreaConfig>`
  background: blue;
  background-image: ${({ backgroundImg }) =>
    backgroundImg && `img(${backgroundImg})`};
  background-position: center;
  background-size: cover;
  padding: 50px 0;
  margin-bottom: 100px;
  h2 {
    text-align: center;
    margin: 0;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  transform: translateY(100px);
`;
