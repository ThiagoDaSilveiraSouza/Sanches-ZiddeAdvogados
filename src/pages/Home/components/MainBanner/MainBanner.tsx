import { MainBannerContent, TextContent } from "./style";

import { Button } from "../../../../components/Button";
import { companyData } from "../../../../configs";
import { createWhatsappLink } from "../../../../utils/createWhatsappLink";

export const MainBanner = () => {
  const whatsappLink = createWhatsappLink(
    "Olá, acabei de acessar o site e estou interessado em seus serviços, pode me ajudar?",
    companyData.number
  );

  return (
    <MainBannerContent id="main-banner">
      <TextContent className="centralizer">
        <p>Escritório Especializado em</p>
        <h1>Direito Previdenciário e do Trabalho</h1>
        <a href={whatsappLink} target="_blank">
          <Button fontSize="16px" padding="10px 30px" fontColor="white">
            Quero fazer uma consulta
          </Button>
        </a>
      </TextContent>
    </MainBannerContent>
  );
};
