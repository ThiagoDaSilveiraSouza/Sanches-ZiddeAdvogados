import styled from "styled-components";

export const TableContainer = styled.div`
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  box-shadow: 0 2px 3px 0 gray;
  overflow: auto;
`;
export const Table = styled.table`
  min-width: 100%;
  tr{
    td{
      padding: 5px;
      height: 37px;
      box-sizing: border-box;
    }
  }
`;
export const TableHead = styled.thead`
  tr{
      background: black;
      color: white;
      th{
        text-align: center;
        font-size: 20px;
      }
    }
`;
export const TableBody = styled.tbody`

  tr{
    cursor: pointer;
    th{
      text-align: start;
    }
    :nth-child(even){
      background: #E8E8E8;
    }
    :hover{
      box-shadow: 0 2px 3px 0 gray;
      transform: scale(1.01);
    }
  }
`;

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