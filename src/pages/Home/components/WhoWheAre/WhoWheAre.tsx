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
          {/* {homePageTextData?.container2Text1 ||
            " Gerido pela advogada Rachel Sanches Zidde, OAB/RJ 149.380, sócia-diretora desde 2010, com mais de 13 anos de experiência"} */}
          Gerido pela advogada Rachel Sanches Zidde, OAB/RJ 149.380,
          sócia-diretora desde 2010, com mais de 13 anos de experiência
        </p>
      </CardWhoWheAre>

      <CardPerformance>
        <p>
          {/* {homePageTextData?.container2Text2 ||
            "Com atuação voltada tanto para pessoas físicas quanto para pessoas jurídicas, nos destacamos sobretudo nas áreas, Cível, Administrativa, Trabalhista, Societária, Tributária e Previdenciária. Nossos atendimentos são humanizados, o que nos faz respeitar e dar a devida importância aos problemas que nos são trazidos, de modo a encontrarmos a solução que melhor se encaixe para cada caso individualizado, otimizando tempo e dinheiro dos nossos clientes."} */}
          Com atuação voltada tanto para pessoas físicas quanto para pessoas
          jurídicas, nos destacamos sobretudo nas áreas, Cível, Administrativa,
          Trabalhista, Societária, Tributária e Previdenciária. Nossos
          atendimentos são humanizados, o que nos faz respeitar e dar a devida
          importância aos problemas que nos são trazidos, de modo a encontrarmos
          a solução que melhor se encaixe para cada caso individualizado,
          otimizando tempo e dinheiro dos nossos clientes.
        </p>
      </CardPerformance>
    </WhoWheAreContent>
  );
};
