import styled from "styled-components";

// interface
import { ICard } from "../../interface";

export const CardContent = styled.div<ICard>`
  width: 339px;
  height: 273px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: var(--gray-color);
  box-shadow: 0 0 3px 0 gray;
  padding: 20px;
  box-sizing: border-box;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    border: ${({ icon }) => !icon && "3px solid black"};
    ::before {
      content: "Icon";
      font-weight: bolder;
      display: ${({ icon }) => icon && "none"};
    }
    img {
      display: ${({ icon }) => !icon && "none"};
    }
  }

  h3 {
    font-size: 22px;
    line-height: 22px;
    text-align: center;
  }
`;
