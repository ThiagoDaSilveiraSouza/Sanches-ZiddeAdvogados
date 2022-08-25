import styled from "styled-components";

// Modal interface
import { IModalDefaultConfigs } from "./interface";

interface IModalContainerStatus {
  modalIsOpen: boolean;
  config?: IModalDefaultConfigs;
}

export const ModalContainer = styled.section<IModalContainerStatus>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  visibility: ${({ modalIsOpen }) => (modalIsOpen ? "visible" : "hidden")};
  animation-delay: 0.5s;
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
  left: ${({ config }) => (config?.cardPosition === "left" ? 0 : "unset")};
  right: ${({ config }) => (config?.cardPosition === "right" ? 0 : "unset")};
  background: white;
  padding: ${({ config }) => config?.cardPadding ?? config?.cardPadding};
  width: 90vw;
  max-width: 500px;
  height: ${({ config }) => config?.cardPosition !== "center" && "100vh"};
  max-height: ${({ config }) =>
    config?.cardPosition !== "center" ? "unset" : "400px"};
  box-sizing: border-box;
  box-shadow: 0 0 3px 0 gray;
  transform: ${({ modalIsOpen, config }) => {
    if (config?.cardPosition === "left") {
      return modalIsOpen ? "translateX(0)" : "translateX(-100%)";
    } else if (config?.cardPosition === "right") {
      return modalIsOpen ? "translateX(0)" : "translateX(100%)";
    }
    return modalIsOpen ? "translateY(0)" : "translateY(-100%)";
  }};
  opacity: ${({ modalIsOpen }) => (modalIsOpen ? 1 : 0)};
  transition: 0.3s;
  overflow-y: auto;

  @media (max-width: 500px) {
    width: 100%;
    max-width: 100vw;
    height: 100%;
    max-height: 100vh;
  }
`;

export const ModalCardCloseButton = styled.div<IModalContainerStatus>`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;

  cursor: pointer;

  :hover {
    transform: scale(1.2);
    ::before,
    ::after {
      background: red;
    }
  }

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background: black;
  }
  ::before {
    transform: rotate(45deg);
  }
  ::after {
    transform: rotate(-45deg);
  }
`;
