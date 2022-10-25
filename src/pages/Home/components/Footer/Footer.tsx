import { FormEventHandler, useState } from "react";

// configs
import { companyData } from "../../../../configs";

// icons
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// services
import { Emailjs } from "../../../../services";

// components
import { Button, SocialMedia } from "../../../../components";

// footer components
import { SendEmailModal } from "./components";

// img
import footerBg from "/bg-rodapé.png";

// style
import {
  DataContainer,
  DeveloperLink,
  FooterContent,
  FormContainer,
  Label,
  MainContainer,
  PhoneContent,
} from "./style";

// utils
import { getFormValues, validateFormValues } from "./utils";

// interface
import { IValidateFormValuesResponse } from "./interface";

export const Footer = ({}) => {
  const atualYear = new Date().getFullYear();
  const [formResponse, setFormResponse] =
    useState<IValidateFormValuesResponse>();
  const [modalIsShow, setModalIsShow] = useState(false);
  const [requestStatus, setRequestStatus] = useState<number>();

  const openSendMailModal = (status: number) => {
    setRequestStatus(status);
    setModalIsShow(true);
  };

  const formHandlerSubmit: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formValues = getFormValues(event);
    const validatedFormValues = validateFormValues(formValues);

    setFormResponse(validatedFormValues);

    if (!validatedFormValues.status) {
      openSendMailModal(400);
      return;
    }

    const postResponse = await Emailjs(formValues);
    console.log(postResponse);

    openSendMailModal(postResponse.status);
    setTimeout(() => {
      setModalIsShow(false);
      formElement.reset();
    }, 2000);

    formElement.reset;
  };

  return (
    <FooterContent footerBg={footerBg} id="footer">
      <div className="centralizer">
        <img src={companyData.logo.second} alt="" />
        <MainContainer>
          <DataContainer>
            <h3>Fale Conosco</h3>
            <PhoneContent>
              <p>
                <FaPhone style={{ transform: "scaleX(-1)" }} />
                {companyData.phone}
              </p>
              <p>
                <MdEmail />
                {companyData.email}
              </p>
            </PhoneContent>
            <SocialMedia havePhone={false} />
          </DataContainer>
          <FormContainer onSubmit={formHandlerSubmit}>
            <Label>
              <div>
                Seu nome:{" "}
                <span>
                  {!formResponse?.fields.userName.fieldIsNull &&
                    formResponse?.alertIsOn &&
                    "Campo Invalido"}
                </span>
              </div>
              <input type="text" name="userName" />
            </Label>
            <Label>
              <div>
                Seu email:{" "}
                <span>
                  {!formResponse?.fields.email.fieldIsNull &&
                    formResponse?.alertIsOn &&
                    "Campo Invalido"}
                </span>
              </div>
              <input type="email" name="email" />
            </Label>
            <Label>
              <div>
                Sua mensagem:{" "}
                <span>
                  {!formResponse?.fields.message.fieldIsNull &&
                    formResponse?.alertIsOn &&
                    "Campo Invalido"}
                </span>
              </div>
              <textarea rows={7} name="message" />
            </Label>
            <div>
              <Button type="submit">Enviar</Button>
            </div>
          </FormContainer>
        </MainContainer>
        <p>© {atualYear} Copyright Sanches & Zidde </p>
        <DeveloperLink>
          Desenvolvido por{" "}
          <strong>
            <a
              href="http://www.agenciamojo.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Agência Mojo
            </a>
          </strong>
        </DeveloperLink>
      </div>
      <SendEmailModal
        useModal={[modalIsShow, setModalIsShow]}
        status={requestStatus}
      />
    </FooterContent>
  );
};
