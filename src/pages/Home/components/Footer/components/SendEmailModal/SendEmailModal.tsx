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

type messageTypeListTypes = keyof typeof messageTypeList;

export const SendEmailModal: FC<ISendEmailModal<messageTypeListTypes>> = ({
  useModal,
  status = "200",
}) => {
  const { title } = messageTypeList[status];

  return (
    <Modal useModal={useModal}>
      <h3>{title}</h3>
    </Modal>
  );
};
