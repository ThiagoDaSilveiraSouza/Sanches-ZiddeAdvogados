// data
import { useState } from "react";
import { Modal } from "../../../../components";
import { cardList } from "./data";

// style
import { OccupationAreaContent, CardContainer } from "./style";

// components
import { Card, ModalContent } from "./components";

export const OccupationArea = () => {
  const [cardSelectedIndex, setCardSelectedIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openCardModalData = (selectedCardIndex: number) => {
    setCardSelectedIndex(selectedCardIndex);
    setModalIsOpen(true);
  };

  return (
    <>
      <OccupationAreaContent>
        <h2>Áreas de atuação</h2>
        <CardContainer>
          {cardList.map((card, index) => (
            <Card
              key={card.title + "-" + index}
              card={card}
              buttonHandlerClick={() => openCardModalData(index)}
            />
          ))}
        </CardContainer>
      </OccupationAreaContent>
      <Modal useModal={[modalIsOpen, setModalIsOpen]}>
        <ModalContent selectedCard={cardList[cardSelectedIndex]} />
      </Modal>
    </>
  );
};
