import { useState } from "react";
import styled from "styled-components";

// icons
import { GrPowerShutdown } from "react-icons/gr";
import { FiType } from "react-icons/fi";
import { VscSettingsGear } from "react-icons/vsc";
import { MdOutlinePostAdd } from "react-icons/md";

// components
import { HamburgerButton } from "../../../../components";

// services
import { firebaseLoggout } from "../../../../services";
import { Link } from "react-router-dom";

const SideMenuStyle = styled.aside``;

interface IInvisibleBar {
  sideBarMinSize: string;
}
const InvisbleBar = styled.div<IInvisibleBar>`
  width: ${({ sideBarMinSize }) => sideBarMinSize};
  height: 100vh;
`;

interface IMenu {
  sideBarMinSize: string;
  isOpen: boolean;
}
const Menu = styled.div<IMenu>`
  position: fixed;
  top: 0;
  left: ${({ isOpen, sideBarMinSize }) =>
    !isOpen ? `calc(-300px + ${sideBarMinSize})` : "0px"};
  width: 300px;
  height: 100vh;
  padding: 5px 0;
  background: white;
  box-shadow: 0 0 3px 0 gray;
  transition: 0.3s;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 400px) {
    width: 100%;
    left: ${({ isOpen, sideBarMinSize }) =>
      !isOpen ? `calc(-100% + ${sideBarMinSize})` : "0px"};
  }
  nav {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    height: 100%;
    a {
      text-decoration: none;
    }
    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 5px 10px;
      border: none;
      background: transparent;
      cursor: pointer;

      :hover {
        box-shadow: 0 3px 4px 0 gray;
        > span {
          transform: scale(1.1);
        }
      }
      span {
        display: flex;
        align-items: center;
        font-size: 20px;
        text-transform: capitalize;
        transition: 0.3s;
      }
    }
  }
`;
interface IInvisibleBG {
  isOpen: boolean;
}
const InvisibleBG = styled.div<IInvisibleBG>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;

const SubNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1 1 auto;
  gap: 20px;
  padding-bottom: 20px;
`;

export const SideMenu = () => {
  const sideBarMinSize = "50px";
  const [isOpen, setIsOpen] = useState(false);

  const menuToggleButton = () => setIsOpen((isOpen) => !isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <SideMenuStyle>
      <InvisibleBG isOpen={isOpen} onClick={closeMenu} />
      <InvisbleBar sideBarMinSize={sideBarMinSize} />

      <Menu sideBarMinSize={sideBarMinSize} isOpen={isOpen}>
        <nav>
          <button onClick={menuToggleButton}>
            <span>Menu</span>
            <span>
              <HamburgerButton
                useButton={[isOpen, () => {}]}
                color="black"
                grow={false}
              />
            </span>
          </button>
          <SubNav>
            <Link to="/dashboard/text-page">
              <button onClick={closeMenu}>
                <span>Texto do site</span>
                <span>
                  <FiType size={30} />
                </span>
              </button>
            </Link>
            <Link to="/dashboard/blog">
              <button onClick={closeMenu}>
                <span>Blog</span>
                <span>
                  <MdOutlinePostAdd size={30} />
                </span>
              </button>
            </Link>
            <Link to="/dashboard/config">
              <button onClick={closeMenu}>
                <span>Configurações</span>
                <span>
                  <VscSettingsGear size={30} />
                </span>
              </button>
            </Link>
            <button onClick={firebaseLoggout}>
              <span>Sair</span>
              <span>
                <GrPowerShutdown size={30} />
              </span>
            </button>
          </SubNav>
        </nav>
      </Menu>
    </SideMenuStyle>
  );
};
