import { Dispatch, FC, SetStateAction } from "react";
import { Modal } from "../../../../../../components";

interface ISendEmailModal<T> {
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
  status?: T;
}
const messageTypeList = {
  "200": {
    title: "Mesagem enviada com sucesso!",
  },
  "400": {
    title: "Mensagem não enviada, tente novamente.",
  },
};

export const SendEmailModal: FC<ISendEmailModal<number>> = ({
  useModal,
  status = 200,
}) => {
  const messageTypeExist = Object.keys(messageTypeList).includes(
    String(status)
  );
  const { title } = messageTypeExist
    ? messageTypeList[String(status) as keyof typeof messageTypeList]
    : { title: "Mensagem não enviada, tente novamente mais tarde." };

  return (
    <Modal useModal={useModal}>
      <h3>{title}</h3>
    </Modal>
  );
};
