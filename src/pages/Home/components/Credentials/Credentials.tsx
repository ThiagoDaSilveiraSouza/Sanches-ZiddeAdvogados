import {
  CredentialsContent,
  ImgContent,
  TextCredentialsContent,
} from "./style";

export const Credentials = () => {
  return (
    <CredentialsContent>
      <div className="centralizer">
        <ImgContent>
          <img src="./img.svg"></img>
        </ImgContent>
        <TextCredentialsContent>
          <h2>Dra. Rachel Sanches Zidde</h2>
          <hr />
          <h5>Sócia fundadora do escritório Sanches & Zidde advogados</h5>
          <p>
            Advogada formada pela UNIFESO- Centro Universitário Serra dos
            Órgãos, inscrita na Ordem dos Advogados do Brasil, OAB/RJ 149.380.
          </p>
          <p>Especializada em Direito do Trabalho e Processo do Trabalho</p>
        </TextCredentialsContent>
      </div>
    </CredentialsContent>
  );
};
