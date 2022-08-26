import styled from "styled-components";

// interface
import { IHeaderConfig } from "./interface";

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

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
  }
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
