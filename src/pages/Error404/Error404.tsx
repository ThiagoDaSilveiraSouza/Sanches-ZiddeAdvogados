import { Link } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.main`
  .centralizer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }
`;

export const Error404 = () => {
  return (
    <PageContainer>
      <div className="centralizer">
        <h1>Error 404</h1>
        <h3>Página não encontrada! =(</h3>
        <Link to="/">Voltar a página inicial</Link>
      </div>
    </PageContainer>
  );
};
