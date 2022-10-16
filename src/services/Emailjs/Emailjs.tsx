import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.emailjs.com/api/v1.0/email/send",
  headers: { "X-Custom-Header": "foobar" },
});

export interface IFormValues {
  userName: string;
  email: string;
  message: string;
}
export const Emailjs = async (formValues: IFormValues) => {
  const configs = {
    service_id: "service_nncs023",
    template_id: "template_x2oexfi",
    user_id: "Gr5cJDuBSNRHq6rQV",
    template_params: formValues,
  };
  
  return instance.post("", configs);
};
