//style
import { ITextHomeData } from "../../../../interfaces";
import { WhoWheAreContent, CardWhoWheAre, CardPerformance } from "./style";

interface IWhoWheAre {
  homePageTextData: ITextHomeData;
}

export const WhoWheAre = ({ homePageTextData }: IWhoWheAre) => {
  return (
    <WhoWheAreContent className="centralizer" id="who-whe-are">
      <CardWhoWheAre>
        <h2>{homePageTextData?.container2Title || "Quem Somos"}</h2>
        <hr />
        <p>
          {homePageTextData?.container2Text1 ||
            " Gerido pela advogada Rachel Sanches Zidde, OAB/RJ 149.380, sócia-diretora desde 2010, com mais de 13 anos de experiência, é especializado em direito previdenciário e do trabalho."}
        </p>
      </CardWhoWheAre>

      <CardPerformance>
        <p>
          {homePageTextData?.container2Text2 ||
            "Atuamos na área de direito do trabalho e direito previdenciário.Nossos atendimentos são humanizados, o que nos faz respeitar e dar a devida importância aos problemas que nos são trazidos, de modo a encontrarmos a solução que melhor se encaixe para cada caso individualizado, otimizando tempo e dinheiro dos nossos clientes."}
        </p>
      </CardPerformance>
    </WhoWheAreContent>
  );
};
