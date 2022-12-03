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

