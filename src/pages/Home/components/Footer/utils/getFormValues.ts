import { FormEvent } from "react";
import { IFormContainer } from "../interface";

export const getFormValues = (event: FormEvent<HTMLFormElement>) => {
  const { userName, email, message } = event.target as IFormContainer;

  const formData = {
    userName: userName.value,
    email: email.value,
    message: message.value,
  };

  return formData;
};
