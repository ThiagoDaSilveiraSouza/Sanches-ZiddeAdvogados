import styled from "styled-components";
import { companyData } from "../../../../configs";

// img
import footerBg from "/bg-rodapé.png";

interface IFooterContent {
  footerBg: string;
}

export const FooterContent = styled.section<IFooterContent>`
  min-height: 862px;
  background-image: ${({ footerBg }) => `url(${footerBg})`};
  padding-top: 143px;
  box-sizing: border-box;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    > img {
      width: 305px;
    }
  }
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > * {
    flex: 1 1 219px;
  }
`;

export const DataContainer = styled.div``;

export const Footer = ({}) => {
  return (
    <FooterContent footerBg={footerBg}>
      <div className="centralizer">
        <img src={companyData.logo.second} alt="" />
        <MainContainer>
          <DataContainer>
            <h3>Fale Conosco</h3>
          </DataContainer>
        </MainContainer>
      </div>
    </FooterContent>
  );
};
