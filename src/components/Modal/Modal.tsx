import { FC, useEffect } from "react";

// Modal Interface
import { IModal, IModalDefaultConfigs } from "./interface";

// style
import {
  ModalContainer,
  ModalBackground,
  ModalCard,
  ModalCardCloseButton,
  ModalCardChildrenContainer,
} from "./style";

const ModalDefaultConfigs: IModalDefaultConfigs = {
  cardPadding: "clamp(15px, 10%, 40px)",
  cardPosition: "center",
};

export const Modal: FC<IModal> = ({
  children,
  useModal,
  config = ModalDefaultConfigs,
}) => {
  const [modalIsOpen, setModalIsOpen] = useModal;

  const freezePage = (modalIsOpen: boolean) => {
    const body = document.body;
    body.style.overflow = modalIsOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    freezePage(modalIsOpen);
  }, [modalIsOpen]);
  return (
    <ModalContainer modalIsOpen={modalIsOpen} {...config}>
      <ModalBackground
        modalIsOpen={modalIsOpen}
        {...config}
        onClick={() => setModalIsOpen(false)}
      />
      <ModalCard modalIsOpen={modalIsOpen} {...config}>
        <ModalCardCloseButton
          modalIsOpen={modalIsOpen}
          {...config}
          onClick={() => setModalIsOpen(false)}
        />
        <ModalCardChildrenContainer {...config}>
          {children}
        </ModalCardChildrenContainer>
      </ModalCard>
    </ModalContainer>
  );
};
