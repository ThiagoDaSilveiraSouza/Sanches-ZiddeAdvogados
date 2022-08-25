import styled from "styled-components";

// interface
import { ICard } from "../../interface";

export const ModalContentStyle = styled.div<ICard>`
  > div {
    display: flex;
    gap: 10px;
    align-items: center;
    :before {
      content: "Icon";
      width: 50px;
      height: 50px;
      border: 3px solid black;
      display: ${({ icon }) => (icon ? "none" : "flex")};
      justify-content: center;
      font-weight: bolder;
      align-items: center;
    }
    img {
      display: ${({ icon }) => !icon && "none"};
    }
  }
  ul {
    font-size: 12px;
    padding: 0;
    list-style-position: inside;
  }
`;
