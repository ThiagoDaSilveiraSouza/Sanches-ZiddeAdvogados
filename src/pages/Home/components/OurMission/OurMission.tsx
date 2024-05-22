import { OurMissionContent, OurMissionDiv, CardMission } from "./style";

import { BetterCardList } from "./data";
import { ITextHomeData } from "../../../../interfaces";

interface IWhoWheAre {
  homePageTextData: ITextHomeData;
}

export const OurMission = ({ homePageTextData }: IWhoWheAre) => {
  return (
    <OurMissionContent>
      <div className="centralizer">
        <OurMissionDiv>
          {BetterCardList.map((card, index) => (
            <CardMission key={index + "-" + card.title}>
              <img src={card.imgPath} alt={"imagem de " + card.title} />
              <h5>{card.title}</h5>
              <p>{card.description}</p>
            </CardMission>
          ))}
        </OurMissionDiv>
      </div>
    </OurMissionContent>
  );
};
