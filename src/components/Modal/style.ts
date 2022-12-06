import styled from "styled-components";

// Modal interface
import { IModalDefaultConfigs } from "./interface";

interface IModalContainerStatus extends IModalDefaultConfigs {
  modalIsOpen: boolean;
}

export const ModalContainer = styled.section<IModalContainerStatus>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: ${({ modalIsOpen }) => (modalIsOpen ? "visible" : "hidden")};
  animation-delay: 0.5s;
  z-index: 2001;
`;


export const ModalBackground = styled.div<IModalContainerStatus>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${({ modalIsOpen }) => (modalIsOpen ? 1 : 0)};
  `;



export const ModalCard = styled.div<IModalContainerStatus>`
  position: absolute;
  left: ${({ cardPosition }) => (cardPosition === "left" ? 0 : "unset")};
  right: ${({ cardPosition }) => (cardPosition === "right" ? 0 : "unset")};
  background: white;

  box-sizing: border-box;
  box-shadow: 0 0 3px 0 gray;
  transform: ${({ modalIsOpen, cardPosition }) => {
    if (cardPosition === "left") {
      return modalIsOpen ? "translateX(0)" : "translateX(-100%)";
    } else if (cardPosition === "right") {
      return modalIsOpen ? "translateX(0)" : "translateX(100%)";
    }
    return modalIsOpen ? "translateY(0)" : "translateY(-100%)";
  }};
  opacity: ${({ modalIsOpen }) => (modalIsOpen ? 1 : 0)};
  transition: 0.3s;
  

  @media (max-width: 500px) {
    width: 100%;
    max-width: 100vw;
    height: 100%;
    max-height: 100vh;
  }
  `;

export const ModalCardCloseButton = styled.div<IModalContainerStatus>`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 29px;
  height: 29px;
  background: white;
  border: 1px solid var(--gray-color-2);

  cursor: pointer;

  :hover {
    box-shadow: 0 0 3px 0 var(--gray-color-2);
  }

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 75%;
    height: 2px;
    background: var(--gray-color-2);
  }
  ::before {
    transform: rotate(45deg);
  }
  ::after {
    transform: rotate(-45deg);
  }
`;



export const ModalCardChildrenContainer = styled.div<IModalDefaultConfigs>`
  flex: 0 1 300px;
  display: flex;
  flex-direction: column;
  width: 90vw;
  padding: 25px;
  max-width: 500px;
  max-height: ${({ cardPosition }) =>
    cardPosition !== "center" ? "100vh" : "90vh"};
  box-sizing: border-box;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 20px;
  }

`