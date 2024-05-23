import styled from "styled-components";

export const PageMenuContainer = styled.nav`
    display: flex;
    gap: 10px;
    align-items: flex-end;
    gap: 10px;
    width: 100%;
    height: fit-content;
    padding: 20px 20px 0 20px;
    list-style: none;
    background: #c6cca5;
    box-shadow: 0 3px 3px 0 gray;
    box-sizing: border-box;
`

interface IPageMenuButtonContainer {
  isChecked: boolean
}

export const PageMenuButtonContainer = styled.button<IPageMenuButtonContainer>`
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-bottom: none;
  color: ${({ isChecked }) => isChecked ? "#54787d" : "white"};
  background: ${({ isChecked }) => isChecked ? "white" : "#c6cca5"};
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  transition: 0.3s;
  cursor: ${({ isChecked }) => isChecked ? "unset" : "pointer"};
  
  :hover{
    
    transform: ${({ isChecked }) => isChecked ? "unset" : "scale(1.03)"};
  }
`