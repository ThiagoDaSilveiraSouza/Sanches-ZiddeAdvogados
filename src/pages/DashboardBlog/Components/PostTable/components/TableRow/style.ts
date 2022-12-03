import styled from "styled-components";

export const TableRowEditColumn = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  
  cursor: pointer;

  
  svg{
    :hover{
      transform: scale(1.2);
      filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
    }
  }
`