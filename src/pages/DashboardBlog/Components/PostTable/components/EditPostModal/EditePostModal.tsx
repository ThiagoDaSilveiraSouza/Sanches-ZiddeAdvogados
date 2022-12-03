import {
  Dispatch,
  SetStateAction,
  FormEvent,
  useState,
  useEffect,
} from "react";
import { Timestamp } from "firebase/firestore";

// interfaces
import { IPost } from "../../../../../../interfaces";

import { UseData } from "../../../../../../Hooks";

// DashboardBlog components
import { Form, TextArea, Input, Button, Label } from "../../../../style";
import { Modal } from "../../../../../../components";

interface IFormEventHandle extends EventTarget {
  title: HTMLInputElement;
  description: HTMLTextAreaElement;
}

interface IEditPostModal {
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
  targetPostToUpdate: IPost | undefined;
}

interface IInputValues {
  title: string;
  description: string;
}
type IInputValuesProps = keyof IInputValues;

export const EditPostModal = ({
  useModal,
  targetPostToUpdate,
}: IEditPostModal) => {
  const { updatePost } = UseData();
  const [, setModalIsOpen] = useModal;
  const [inputValues, setInputValues] = useState<IPost>();

  const updateInputValue = (inputName: IInputValuesProps, value: string) => {
    setInputValues((inputValues) => {
      if (inputValues) {
        const newInputValues = { ...inputValues };
        newInputValues[inputName] = value;
        return newInputValues;
      }
    });
  };

  const editButtonHandlerClick = async () => {
    if (inputValues?.id) {
      const { id, ...restOfInputValues } = inputValues;
      const currentDate = new Date();

      const newPost: IPost = {
        ...restOfInputValues,
        date: Timestamp.fromDate(currentDate),
      };

      const updatePostResponse = await updatePost(id, newPost);
      if (updatePostResponse) {
        setModalIsOpen(false);
        setInputValues(undefined);
      }
    }
  };

  useEffect(() => {
    setInputValues(targetPostToUpdate);
  }, [targetPostToUpdate]);

  return (
    <Modal useModal={useModal}>
      <h1>Editar Postagem</h1>
      <Label>
        <strong>Título</strong>
        <Input
          type="text"
          name="title"
          value={inputValues?.title}
          onChange={(event) => {
            updateInputValue("title", event.target.value);
          }}
        />
      </Label>
      <Label>
        <strong>Descrição</strong>
        <TextArea
          name="description"
          value={inputValues?.description}
          onChange={(event) => {
            updateInputValue("description", event.target.value);
          }}
        />
      </Label>
      <Button onClick={editButtonHandlerClick}>Salvar</Button>
    </Modal>
  );
};
