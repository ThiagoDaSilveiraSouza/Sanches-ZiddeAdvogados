import { FormEventHandler, useState } from "react";

// configs
import { companyData } from "../../../../configs";

// icons
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// components
import { Button } from "../../../../components";

// footer components
import { SendEmailModal } from "./components";

// img
import footerBg from "/bg-rodapé.png";

// style
import {
  DataContainer,
  FooterContent,
  FormContainer,
  Label,
  MainContainer,
  PhoneContent,
  SocialMediaContent,
} from "./style";

// utils
import { getFormValues, validateFormValues } from "./utils";

// interface
import { IValidateFormValuesResponse, messageTypeListTypes } from "./interface";

export const Footer = ({}) => {
  const [formResponse, setFormResponse] =
    useState<IValidateFormValuesResponse>();
  const [modalIsShow, setModalIsShow] = useState(true);
  const [requestStatus, setRequestStatus] = useState<messageTypeListTypes>();

  const openSendMailModal = (status: messageTypeListTypes) => {
    setRequestStatus(status);
    setModalIsShow(true);
  };

  const formHandlerSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formValues = getFormValues(event);
    const validatedFormValues = validateFormValues(formValues);

    setFormResponse(validatedFormValues);

    if (!validatedFormValues.status) {
      openSendMailModal("400");
      return;
    }
    openSendMailModal("200");
  };

  return (
    <FooterContent footerBg={footerBg}>
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
            <SocialMediaContent>
              <a href="/">
                <AiOutlineInstagram />
              </a>
              <a href="/">
                <FaFacebookF />
              </a>
            </SocialMediaContent>
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
      </div>
      <SendEmailModal
        useModal={[modalIsShow, setModalIsShow]}
        status={requestStatus}
      />
    </FooterContent>
  );
};
