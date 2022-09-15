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
    service_id: "service_r132n1e",
    template_id: "template_fowfqsc",
    user_id: "user_u7shaH2Tm7zlcc0hHX8LU",
    template_params: formValues,
  };

  const response = await instance.post(
    "https://api.emailjs.com/api/v1.0/email/send",
    configs
  );

  return response;
};
