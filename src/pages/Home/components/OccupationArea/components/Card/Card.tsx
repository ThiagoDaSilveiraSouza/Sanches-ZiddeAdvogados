import { FC } from "react";
import { Button } from "../../../../../../components";

// components

// interface
import { ICard } from "../../interface";

// style
import { CardContent } from "./style";

interface ICardProps {
  card: ICard;
  buttonHandlerClick: Function;
}

export const Card: FC<ICardProps> = ({ card, buttonHandlerClick }) => {
  return (
    <CardContent {...card}>
      <div>
        <img src={card.icon} alt={card.title} />
      </div>
      <h3>{card.title}</h3>

      <Button onClick={() => buttonHandlerClick()}>Saiba mais</Button>
    </CardContent>
  );
};
