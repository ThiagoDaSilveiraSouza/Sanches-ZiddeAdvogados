import { FC } from "react";
import { Button } from "../../../../../../components";

// interface
import { ICard } from "../../interface";

// style
import { ModalContentStyle } from "./style";

interface IModalContent {
  selectedCard: ICard;
}
export const ModalContent: FC<IModalContent> = ({ selectedCard }) => {
  return (
    <ModalContentStyle {...selectedCard}>
      <div>
        <img src={selectedCard.icon} alt={selectedCard.title} />
        <h3>{selectedCard.title}</h3>
      </div>
      <ul>
        {selectedCard.descriptionList.map((description, index) => (
          <li key={description + "-" + index}>{description}</li>
        ))}
      </ul>
      <a href="/" target="_blank">
        <Button fontColor="var(--dark-color)">Quero fazer uma consulta</Button>
      </a>
    </ModalContentStyle>
  );
};
