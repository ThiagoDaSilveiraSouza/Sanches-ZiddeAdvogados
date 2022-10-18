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
  SocialMediaContainer,
  SocialMediaAncorIcon,
  MenuContainer,
} from "./style";
import { windowMouseOverEvent, windowScrollEvent } from "./utils";
import { scrollTo } from "../../utils";

export const Header = () => {
  const headerConfig: IHeaderConfig = {
    height: 157,
    logoUrl: companyData.logo.first,
  };
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuIsHidden, setMenuIsHidden] = useState(false);

  const addWindowMouseEvents = useCallback(() => {
    windowScrollEvent([menuIsHidden, setMenuIsHidden], headerConfig.height);
    windowMouseOverEvent([menuIsHidden, setMenuIsHidden], headerConfig.height);
  }, [menuIsOpen, menuIsHidden]);

  useEffect(() => {
    addWindowMouseEvents();
  }, []);

  return (
    <>
      <ShadowHeader {...headerConfig} />
      <HeaderContainer {...headerConfig} menuIsHidden={menuIsHidden}>
        <div className="centralizer">
          <LogoContainer
            onClick={() => scrollTo("#main-banner")}
            {...headerConfig}
          />
          <MenuContainer menuIsOpen={menuIsOpen}>
            <Nav>
              <span onClick={() => scrollTo("#who-whe-are")}>Quem somos</span>
              <span onClick={() => scrollTo("#occupation-area")}>
                Areas de atuação
              </span>
              <span onClick={() => scrollTo("#footer")}>Fale conosco</span>
            </Nav>
            <SocialMediaContainer>
              <a type="phone" href={`tel:${companyData.phone}`}>
                {companyData.phone}
              </a>
              <div>
                <SocialMediaAncorIcon
                  href={companyData.socialMedia.instagram}
                  haveLink={companyData.socialMedia.instagram}
                  target="_blank"
                  >
                  <AiOutlineInstagram />
                </SocialMediaAncorIcon>
                <SocialMediaAncorIcon
                  href={companyData.socialMedia.facebook}
                  haveLink={companyData.socialMedia.facebook}
                  target="_blank"
                >
                  <FaFacebookF />
                </SocialMediaAncorIcon>
              </div>
            </SocialMediaContainer>
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
