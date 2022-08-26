import { MainBannerContent, TextContent } from "./style";

import {Button} from "../../../../components/Button"

export const MainBanner = () => {
  return (
    <MainBannerContent>
      <TextContent>
        <div>
        <p>Escritório Especializado em</p>
        <h1>Direito Empresarial <br/> e do Trabalho</h1>
        <Button style={{color:'white'}}> QUERO FAZER UMA CONSULTA</Button>
        </div>
      </TextContent>
    </MainBannerContent>
  );
};
