import { FC } from "react";

// Modal Interface
import { IModal, IModalDefaultConfigs } from "./interface";

// style
import {
  ModalContainer,
  ModalBackground,
  ModalCard,
  ModalCardCloseButton,
} from "./style";

const ModalDefaultConfigs: IModalDefaultConfigs = {
  cardPadding: "18px",
  cardPosition: "center",
};

export const Modal: FC<IModal> = ({
  children,
  useModal,
  config = ModalDefaultConfigs,
}) => {
  const [modalIsOpen, setModalIsOpen] = useModal;
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
        {children}
      </ModalCard>
    </ModalContainer>
  );
};
