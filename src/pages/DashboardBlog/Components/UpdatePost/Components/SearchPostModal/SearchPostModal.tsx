import { Dispatch, SetStateAction } from "react";
import { Form, Input, Label } from "../../../../style";
import { Modal } from "../../../../../../components";
import styled from "styled-components";

const SearchListContainer = styled.table`
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

const Tr = styled.tr`
  display: flex;
  th,
  td {
    text-align: center;
    cursor: pointer;
    :first-child {
      flex: 0 1 60px;
    }
    :nth-child(2) {
      flex: 0 1 90px;
    }
    :nth-child(3) {
      flex: 1 1 auto;
    }
  }
`;

const TrTitle = styled(Tr)`
  border-bottom: 1px solid black;
  background: rgba(0, 0, 0, 0.1);
`;

const TrItem = styled(Tr)`
  :nth-child(odd) {
    background: rgba(0, 0, 0, 0.03);
  }
  :hover {
    box-shadow: 0 0 3px 0 gray;
    transition: 0.3s;
    transform: scaleY(1.01);
  }
`;

const PostItem = () => {
  const currentDate = new Date();
  const day = currentDate.getUTCDate();
  const month = currentDate.getUTCMonth();
  const year = currentDate.getUTCFullYear();
  const stringDate = `${day}/${month}/${year}`;
  return (
    <TrItem>
      <td>001</td>
      <td>{stringDate}</td>
      <td>Título da postagem</td>
    </TrItem>
  );
};

interface ISearchPostModal {
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const SearchPostModal = ({ useModal }: ISearchPostModal) => {
  return (
    <Modal useModal={useModal}>
      <Form>
        <h1>Filtrar por:</h1>
        <Label>
          <strong>Data:</strong>
          <Input type="date" name="date" />
        </Label>
        <Label>
          <strong>Id:</strong>
          <Input name="idValue" />
        </Label>
        <Label>
          <strong>titulo:</strong>
          <Input name="title" />
        </Label>
      </Form>
      <SearchListContainer>
        <TrTitle>
          <th>Id</th>
          <th>Data</th>
          <th>Título</th>
        </TrTitle>
        <div>
          <PostItem />
        </div>
      </SearchListContainer>
    </Modal>
  );
};
