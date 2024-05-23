import { MainBannerContent, TextContent } from "./style";

import { Button } from "../../../../components/Button";
import { companyData } from "../../../../configs";
import { createWhatsappLink } from "../../../../utils/createWhatsappLink";
import { ITextHomeData } from "../../../..//interfaces";

interface IMainBanner {
  homePageTextData: ITextHomeData;
}

export const MainBanner = ({ homePageTextData }: IMainBanner) => {
  const whatsappLink = createWhatsappLink(
    "Olá, acabei de acessar o site e estou interessado em seus serviços, pode me ajudar?",
    companyData.phone
  );

  return (
    <MainBannerContent id="main-banner">
      <TextContent className="centralizer">
        <p>
          {homePageTextData?.container1Subtitle ||
            "Escritório Especializado em"}
        </p>
        <h1>
          {homePageTextData?.container1Title ||
            "Direito Previdenciário e do Trabalho"}
        </h1>
        <a href={whatsappLink} target="_blank">
          <Button fontSize="16px" padding="10px 30px" fontColor="white">
            {homePageTextData?.container1Button || "Quero fazer uma consulta"}
          </Button>
        </a>
      </TextContent>
    </MainBannerContent>
  );
};
