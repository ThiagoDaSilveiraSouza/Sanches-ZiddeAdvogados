// icons
import { FC } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

// company configs
import { companyData } from "../../configs";

// style
import { SocialMediaAncorIcon, SocialMediaContainer } from "./style";

interface ISocialMedia {
  mobileWrap?: boolean;
  havePhone?: boolean;
  padding?: string;
}

export const SocialMedia: FC<ISocialMedia> = ({
  mobileWrap,
  havePhone = true,
  padding = "10px",
}) => {
  return (
    <SocialMediaContainer mobileWrap={mobileWrap} padding={padding}>
      {havePhone && (
        <a type="phone" href={`tel:${companyData.phone}`}>
          {companyData.phone}
        </a>
      )}
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
  );
};
