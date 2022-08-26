import { OurMissionContent, OurMissionDiv } from "./style";

import { BetterCardList } from "./data";

export const OurMission = () => {
  return (
      <OurMissionContent className="centralizer">
          <OurMissionDiv >
        {BetterCardList.map((card, index) => (
          <>
            <img src={card.imgPath} alt="" />
            <h5>{card.title}</h5>
            <p>{card.description}</p>
          </>
        ))}
    </OurMissionDiv>
      </OurMissionContent>
  );
};
