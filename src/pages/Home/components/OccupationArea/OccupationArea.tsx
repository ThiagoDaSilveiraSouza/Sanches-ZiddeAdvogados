// data
import { FC, useState } from "react";
import { Modal } from "../../../../components";
import { cardList } from "./data";

// img
import backgroundImg from "/banner-atuacao.png";

// interface
import { IOcupationAreaConfig } from "./interface";

// components
import { Card, ModalContent } from "./components";

// style
import { OccupationAreaContent, CardContainer } from "./style";

const defaultConfig: IOcupationAreaConfig = {
  backgroundImg: backgroundImg,
};

interface IOcupationArea {
  config?: IOcupationAreaConfig;
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
    <OccupationAreaContent {...config} id="occupation-area">
      <div className="centralizer">
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
      </div>
      <Modal useModal={[modalIsOpen, setModalIsOpen]}>
        <ModalContent selectedCard={cardList[cardSelectedIndex]} />
      </Modal>
    </OccupationAreaContent>
  );
};
