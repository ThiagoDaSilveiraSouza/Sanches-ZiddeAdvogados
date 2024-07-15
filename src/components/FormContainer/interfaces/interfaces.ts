import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ButtonHTMLAttributes,
  SelectHTMLAttributes,
} from "react";


export interface IProps {
  select?: SelectHTMLAttributes<HTMLSelectElement>;
  input?: InputHTMLAttributes<HTMLInputElement>;
  textArea?: TextareaHTMLAttributes<HTMLTextAreaElement>;
  button?: ButtonHTMLAttributes<HTMLButtonElement>;
}
