import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IModalDefaultConfigs {
  cardPadding?: string;
  cardPosition?: "left" | "center" | "right";
  cardBackground?: string;
}

export interface IModal {
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
  config?: IModalDefaultConfigs;
  children?: ReactNode;
}
