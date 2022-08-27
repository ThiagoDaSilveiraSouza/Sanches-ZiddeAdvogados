import { MainBannerContent, TextContent } from "./style";

import { Button } from "../../../../components/Button";

export const MainBanner = () => {
  return (
    <MainBannerContent>
      <TextContent className="centralizer">
        <p>Escritório Especializado em</p>
        <h1>
          Direito Empresarial <br /> e do Trabalho
        </h1>
        <Button style={{ color: "white", width: 261, height:47, fontSize:16, flexWrap:"nowrap" }}>
          {" "}
          QUERO FAZER UMA CONSULTA
        </Button>
      </TextContent>
    </MainBannerContent>
  );
};
