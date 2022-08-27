import styled from "styled-components";

// interface
import { IHeaderConfig, IMenuContainer } from "./interface";

export const ShadowHeader = styled.div<IHeaderConfig>`
  height: ${({ height }) => height + "px"};
`;

export const HeaderContainer = styled.header<IHeaderConfig>`
  position: absolute;
  left: 0;
  top: 0;
  height: ${({ height }) => height + "px"};
  width: 100%;
  background: var(--dark-color);
  color: white;
  z-index: 1001;
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

export const LogoContainer = styled.a<IHeaderConfig>`
  width: 214px;
  height: 73px;
  border: ${({ logoUrl }) => !logoUrl && "3px solid white"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ logoUrl }) => logoUrl});
  background-size: cover;
  background-position: center;
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
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    a {
      text-align: center;
    }
  }
`;

export const MenuContainerCloseButton = styled.div`
  top: 20px;
  right: 20px;
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px solid white;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  a {
    color: var(--gold-color);
    text-decoration: none;
    font-size: 15px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    background: var(--dark-color);
    padding-bottom: 20px;
  }
  > div {
    display: flex;
    gap: 10px;
  }
`;
export const SocialMediaAncorIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: var(--gold-color);
  border-radius: 100%;
  svg {
    color: var(--dark-color);
  }
  :hover {
    box-shadow: 0 0 3px 0 white;
  }
`;
