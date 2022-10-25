import { useCallback, useEffect, useState } from "react";

// icons
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

// config
import { companyData } from "../../configs";

// interface
import { IHeaderConfig } from "./interface";

// Header components
import { HamburgerButton } from "./components";

// Header Style
import {
  HeaderContainer,
  ShadowHeader,
  LogoContainer,
  Nav,
  MenuContainer,
} from "./style";
import { windowMouseOverEvent, windowScrollEvent } from "./utils";
import { scrollTo } from "../../utils";
import { UseMenu } from "../../Hooks";

// components
import { SocialMedia } from "../SocialMedia";

export const Header = () => {
  const headerConfig: IHeaderConfig = {
    height: 157,
    logoUrl: companyData.logo.first,
  };
  const { menuIsOpen, setMenuIsOpen } = UseMenu();
  const [menuIsHidden, setMenuIsHidden] = useState(false);

  const addWindowMouseEvents = useCallback(() => {
    windowScrollEvent([menuIsHidden, setMenuIsHidden], headerConfig.height);
    windowMouseOverEvent([menuIsHidden, setMenuIsHidden], headerConfig.height);
  }, [menuIsOpen, menuIsHidden]);

  useEffect(() => {
    addWindowMouseEvents();
  }, []);

  const buttonHandleClick = (targetId: string) => {
    setMenuIsOpen(false);
    scrollTo(targetId);
  };

  return (
    <>
      <ShadowHeader {...headerConfig} />
      <HeaderContainer {...headerConfig} menuIsHidden={menuIsHidden}>
        <div className="centralizer">
          <LogoContainer
            onClick={() => buttonHandleClick("#main-banner")}
            {...headerConfig}
          />
          <MenuContainer menuIsOpen={menuIsOpen}>
            <Nav>
              <span onClick={() => buttonHandleClick("#who-whe-are")}>
                Quem somos
              </span>
              <span onClick={() => buttonHandleClick("#occupation-area")}>
                Areas de atuação
              </span>
              <span onClick={() => buttonHandleClick("#footer")}>
                Fale conosco
              </span>
            </Nav>
            <SocialMedia mobileWrap={true} />
          </MenuContainer>
          <HamburgerButton
            useButton={[menuIsOpen, setMenuIsOpen]}
            zIndex="1002"
            sizeToHidde="900px"
          />
        </div>
      </HeaderContainer>
    </>
  );
};
