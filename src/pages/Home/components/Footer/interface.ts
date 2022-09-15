import { messageTypeList } from "./data";

export interface IFooterContent {
  footerBg?: string;
}

export interface IFormContainer extends EventTarget {
  userName: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

export interface IFormValues {
  userName: string;
  email: string;
  message: string;
}

export type IFieldsStatus = {
  [keys in keyof IFormValues]: {
    fieldIsNull: boolean;
  };
};

export interface IValidateFormValuesResponse {
  fields: IFieldsStatus;
  status: boolean;
  alertIsOn: boolean;
}
