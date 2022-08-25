// icons
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

// config
import { companyData } from "../../configs";

// interface
import { IHeaderConfig } from "./interface";

// Header Style
import {
  HeaderContainer,
  ShadowHeader,
  LogoContainer,
  Nav,
  SocialMediaContainer,
  SocialMediaAncorIcon,
} from "./style";

export const Header = () => {
  const headerConfig: IHeaderConfig = {
    height: 80,
    logoUrl: companyData.logo.first,
  };
  return (
    <>
      <ShadowHeader {...headerConfig} />
      <HeaderContainer {...headerConfig}>
        <div className="centralizer">
          <LogoContainer href="/" {...headerConfig} />
          <Nav>
            <a href="/">Quem somos</a>
            <a href="/">Areas de atuação</a>
            <a href="/">Fale conosco</a>
          </Nav>
          <SocialMediaContainer>
            <a href={`tel:${companyData.phone}`} target="_blank">
              {companyData.phone}
            </a>
            <SocialMediaAncorIcon
              href={companyData.socialMedia.instagram}
              target="_blank"
            >
              <AiOutlineInstagram />
            </SocialMediaAncorIcon>
            <SocialMediaAncorIcon
              href={companyData.socialMedia.facebook}
              target="_blank"
            >
              <FaFacebookF />
            </SocialMediaAncorIcon>
          </SocialMediaContainer>
        </div>
      </HeaderContainer>
    </>
  );
};
