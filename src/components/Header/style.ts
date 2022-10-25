import styled from "styled-components";

// interface
import { IHeaderConfig, IMenuContainer } from "./interface";

export const ShadowHeader = styled.div<IHeaderConfig>`
  height: ${({ height }) => height + "px"};
  background: var(--dark-color);
`;

export const HeaderContainer = styled.header<IHeaderConfig>`
  position: fixed;
  left: 0;
  top: 0;
  height: ${({ height }) => height + "px"};
  width: 100%;
  background: var(--dark-color);
  color: white;
  z-index: 1001;
  transform: ${({ menuIsHidden }) => menuIsHidden && "translateY(-100%)"};
  transition: 0.3s;
  .centralizer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    height: 100%;

    a {
      :hover {
        transform: scale(1.03);
        /* transition: 0.3s; */
      }
    }
  }
`;

export const LogoContainer = styled.div<IHeaderConfig>`
  flex: 0 1 214px;
  height: 73px;
  border: ${({ logoUrl }) => !logoUrl && "3px solid white"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ logoUrl }) => logoUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;

  ::after {
    content: "Logo";
    font-size: 30px;
    display: ${({ logoUrl }) => (logoUrl ? "none" : "unset")};
  }
`;

export const MenuContainer = styled.div<IMenuContainer>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 100%;
  z-index: 0;

  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: flex-end;
    gap: 35%;
    width: 100%;
    height: 100vh;
    min-height: fit-content;
    background: var(--dark-color);
    transform: ${({ menuIsOpen }) =>
      menuIsOpen ? "none" : "translateX(-100%)"};
    transition: 0.3s;
    z-index: 1002;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  a,
  span {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    a {
      text-align: center;
    }
  }
`;
