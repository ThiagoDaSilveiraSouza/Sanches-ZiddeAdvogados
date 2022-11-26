import { FC, SetStateAction, Dispatch } from "react";
import styled from "styled-components";
import { IPageList } from "../../Helper";

const HeaderElement = styled.header`
  display: flex;
  gap: 15px;
`;

const HeaderButton = styled.button`
  font-size: 25px;
  cursor: pointer;
`;

interface IHeader {
  setCurrentPage: Dispatch<SetStateAction<IPageList>>;
}

export const Header: FC<IHeader> = ({ setCurrentPage }) => {
  return (
    <HeaderElement>
      <HeaderButton onClick={() => setCurrentPage("newPost")}>
        Nova Postagem
      </HeaderButton>
      <HeaderButton onClick={() => setCurrentPage("updatePost")}>
        Alterar Postagem
      </HeaderButton>
    </HeaderElement>
  );
};
