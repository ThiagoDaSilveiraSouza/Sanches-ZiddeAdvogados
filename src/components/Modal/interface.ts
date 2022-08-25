import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IModalDefaultConfigs {
  cardPadding?: string;
  cardPosition?: "left" | "center" | "right";
}

export interface IModal {
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
  config?: IModalDefaultConfigs;
  children: ReactNode;
}
