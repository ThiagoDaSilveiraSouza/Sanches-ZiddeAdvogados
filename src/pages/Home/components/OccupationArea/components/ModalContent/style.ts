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
      width: 57px;
      display: ${({ icon }) => !icon && "none"};
    }
    h3 {
      font-family: var(--secondary-font);
      font-size: 28px;
      line-height: 22px;
    }
  }
  ul {
    font-size: 16px;
    padding: 0;
    list-style-position: inside;
    li {
      line-height: 28px;
      span {
        position: relative;
        left: -12px;
      }
    }
  }
`;
