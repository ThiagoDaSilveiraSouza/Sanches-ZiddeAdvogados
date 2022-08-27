//style
import { WhoWheAreContent, CardWhoWheAre, CardPerformance } from "./style";

export const WhoWheAre = () => {
  return (
    <WhoWheAreContent className="centralizer">
      <CardWhoWheAre>
        <h2>Quem Somos</h2>
        <hr />
        <p>
          Gerido pela advogada Rachel Sanches Zidde, OAB/RJ 149.380,
          sócia-diretora desde 2010, com mais de 13 anos de experiência, é
          especializado em direito empresarial e do trabalho.
        </p>
      </CardWhoWheAre>

      <CardPerformance>
        <p>
          Atuamos na área de direito do trabalho para empresas, direito
          societário e direito contratual. Nossos atendimentos são humanizados,
          o que nos faz respeitar e dar a devida importância aos problemas que
          nos são trazidos, de modo a encontrarmos a solução que melhor se
          encaixe para cada caso individualizado, otimizando tempo e dinheiro
          dos nossos clientes.
        </p>
      </CardPerformance>
    </WhoWheAreContent>
  );
};
