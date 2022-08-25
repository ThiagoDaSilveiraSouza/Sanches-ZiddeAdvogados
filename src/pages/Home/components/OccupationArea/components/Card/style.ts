import styled from "styled-components";

// interface
import { ICard } from "../../interface";

export const CardContent = styled.div<ICard>`
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--gray-color);
  box-shadow: 0 0 3px 0 gray;
  padding: 20px;
  box-sizing: border-box;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
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
    font-size: 14px;
    text-align: center;
  }

  button {
    padding: 5px;
    border: 2px solid var(--gold-color);
    color: var(--gold-color);
    font-weight: bolder;
    cursor: pointer;
    :hover {
      box-shadow: 0 0 3px 0 var(--gold-color);
    }
  }
`;
