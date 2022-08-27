import { MainBannerContent, TextContent } from "./style";

import { Button } from "../../../../components/Button";

export const MainBanner = () => {
  return (
    <MainBannerContent>
      <TextContent className="centralizer">
        <p>Escritório Especializado em</p>
        <h1>Direito Empresarial e do Trabalho</h1>
        <a href="/" target="_blank">
          <Button fontSize="16px" padding="10px 30px" fontColor="white">
            Quero fazer uma consulta
          </Button>
        </a>
      </TextContent>
    </MainBannerContent>
  );
};
