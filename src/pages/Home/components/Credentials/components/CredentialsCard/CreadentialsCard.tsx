import { FC } from "react";

// interfaces
import { ILawyers } from "src/interfaces/ICompanyData";

// style
import { CardContent, ImgContent, TextCredentialsContent } from "./style";

interface ICredentialsCard {
  lawyers: ILawyers;
}

export const CredentialsCard: FC<ICredentialsCard> = ({ lawyers }) => {
  const { id, description, img, name, skills, title } = lawyers;
  return (
    <CardContent>
      <ImgContent>
        <img src={img || "/img.svg"} alt={name} />
      </ImgContent>
      <TextCredentialsContent>
        <h2>{name}</h2>
        <hr />
        <h5>{title}</h5>
        {skills.map((currentSkill, index) => (
          <h5 key={`lawyer:${id}-skill:${index}`}>{currentSkill}</h5>
        ))}
        {description.map((currentDescription, index) => (
          <p key={`lawyer:${id}-description:${index}`}>{currentDescription}</p>
        ))}
      </TextCredentialsContent>
    </CardContent>
  );
};
