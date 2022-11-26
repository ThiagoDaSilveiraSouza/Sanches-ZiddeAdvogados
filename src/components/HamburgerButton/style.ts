import styled from "styled-components";

// interface
import { IHamburgerContent } from "./interface";

export const HamburgerContent = styled.div<IHamburgerContent>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: ${({ zIndex }) => zIndex};

  @media (min-width: ${({ sizeToHidde }) => sizeToHidde}) {
    display: none;
  }

 

  span {
    position: relative;
    display: flex;
    width: 100%;
    height: 3px;
    background: ${({ color }) => color || `var(--gold-color)`};
    border-radius: 5px;
    transition: 0.3s;
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "none")};

    ::before,
    ::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background:${({ color }) => color || `var(--gold-color)`} ;
      border-radius: 5px;
      transition: 0.3s;
    }
    ::before {
      transform: ${({ isOpen }) =>
    !isOpen ? "translateY(10px)" : "translateY(0) rotate(-90deg)"};
    }
    ::after {
      transform: ${({ isOpen }) =>
    !isOpen ? "translateY(-10px)" : "translateY(0) rotate(-90deg)"};
    }
  }
`;
