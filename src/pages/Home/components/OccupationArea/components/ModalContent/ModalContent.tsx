import { FC } from "react";
import { Button } from "../../../../../../components";

// interface
import { ICard } from "../../interface";

// style
import { ModalContentStyle } from "./style";

import { createWhatsappLink } from "../../../../../../utils";
import { companyData } from "../../../../../../configs";
interface IModalContent {
  selectedCard: ICard;
}
export const ModalContent: FC<IModalContent> = ({ selectedCard }) => {
  const whatsappLinkByOccupation = (occupation: string) =>
    createWhatsappLink(
      `Olá, acabei de acessar o site e estou interessado em seus serviços de ${occupation}, pode me ajudar?`,
      companyData.phone
    );

  return (
    <ModalContentStyle {...selectedCard}>
      <div>
        <img src={selectedCard.icon} alt={selectedCard.title} />
        <h3>{selectedCard.title}</h3>
      </div>
      <h4>{selectedCard?.subTitle}</h4>
      <ul>
        {selectedCard.descriptionList.map((description, index) => (
          <li key={description + "-" + index}>{description}</li>
        ))}
      </ul>
      <a href={whatsappLinkByOccupation(selectedCard.title)} target="_blank">
        <Button fontColor="var(--dark-color)">Quero fazer uma consulta</Button>
      </a>
    </ModalContentStyle>
  );
};
