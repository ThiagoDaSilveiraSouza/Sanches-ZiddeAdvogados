import styled from "styled-components";

export const SearchListContainer = styled.table`
  display: flex;
  flex-direction: column;
  list-style: none;
  border: 1px solid black;
  height: 300px;
  > div {
    overflow-y: auto;
    height: 100%;
  }
`;

export const Tr = styled.tr`
  display: flex;
  th,
  td {
    text-align: center;
    cursor: pointer;

    :first-child {
      flex: 0 1 80px;
      max-width: 80px;
      overflow: auto;
    }
    :nth-child(2) {
      flex: 0 1 90px;
      max-width: 90px;
      overflow: auto;
    }
    :nth-child(3) {
      flex: 0 1 auto;
      overflow: auto;
    }
  }
`;

export const TrTitle = styled(Tr)`
  border-bottom: 1px solid black;
  background: rgba(0, 0, 0, 0.1);
`;

export const TrItem = styled(Tr)`
  :nth-child(odd) {
    background: rgba(0, 0, 0, 0.03);
  }
  :hover {
    box-shadow: 0 0 3px 0 gray;
    transition: 0.3s;
    transform: scaleY(1.01);
  }
`;
