// data
import { FC, useState } from "react";
import { Modal } from "../../../../components";
import { cardList } from "./data";

// interface
import { IOcupationAreaConfig } from "./interface";

// components
import { Card, ModalContent } from "./components";

// style
import { OccupationAreaContent, CardContainer } from "./style";

const defaultConfig: IOcupationAreaConfig = {
  backgroundImg: "",
};

interface IOcupationArea {
  config: IOcupationAreaConfig;
}
export const OccupationArea: FC<IOcupationArea> = ({
  config = defaultConfig,
}) => {
  const [cardSelectedIndex, setCardSelectedIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openCardModalData = (selectedCardIndex: number) => {
    setCardSelectedIndex(selectedCardIndex);
    setModalIsOpen(true);
  };

  return (
    <>
      <OccupationAreaContent {...config}>
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
