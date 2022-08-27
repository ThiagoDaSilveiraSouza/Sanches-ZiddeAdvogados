import styled from "styled-components";

// interface
import { IButton } from "./interface";

export const Button = styled.button<IButton>`
  padding: ${({ padding }) => padding || "5px 15px"};
  border: ${({ borderColor }) => borderColor || "1px solid var(--gold-color)"};
  background: ${({ backgroundColor }) => backgroundColor || "transparent"};
  color: ${({ fontColor }) => fontColor || "var(--gold-color)"};
  text-transform: uppercase;
  font: ${({ fontSize }) =>
    `normal normal normal ${fontSize || "13px/25px"} var(--primary-font)`};
  cursor: pointer;
  :hover {
    box-shadow: ${({ borderColor }) =>
      borderColor || "0 0 3px 0 var(--gold-color)"};
  }
`;
