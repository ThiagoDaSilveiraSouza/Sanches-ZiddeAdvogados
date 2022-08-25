import styled from "styled-components";

// interface
import { IConfigDefault } from "./interface";

export const Button = styled.button<IConfigDefault>`
  padding: 10px;
  border: ${({ borderColor }) => borderColor || "2px solid var(--gold-color)"};
  background: ${({ backgroundColor }) => backgroundColor || "transparent"};
  color: ${({ fontColor }) => fontColor || "var(--gold-color)"};
  font-weight: bolder;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    box-shadow: ${({ borderColor }) =>
      borderColor || "0 0 3px 0 var(--gold-color)"};
  }
`;
