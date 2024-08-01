import { companyData } from "../../configs";
import { createWhatsappLink } from "../../utils";
import styled from "styled-components";
import { ImWhatsapp } from "react-icons/im";

const Link = styled.a`
  position: fixed;
  right: 1.25rem;
  bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 100%;
  overflow: hidden;
  transition: 0.3s;

  background: rgb(37, 211, 102);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const FloatWhatsappButton = () => {
  const message =
    "Olá, acabei de acessar o site e estou interessado em seus serviços, pode me ajudar?";
  const whatsAppLink = createWhatsappLink(
    message,
    companyData.socialMedia.whatsapp
  );

  return (
    <Link href={whatsAppLink} target="_blank">
      <ImWhatsapp size={26} color="white" />
    </Link>
  );
};
