import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";

// interfaces
import { IPost } from "../../../../interfaces";

import { UseData } from "../../../../Hooks";

// DashboardBlog components
import { Form, TextArea, Input, Button, Label } from "../../style";
import { Modal } from "../../../../components";

interface INewPostModal {
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
}

interface IInputList {
  title: string;
  description: string;
}

const initialInputValues: IInputList = {
  title: "",
  description: "",
};

export const NewPostModal = ({ useModal }: INewPostModal) => {
  const { addNewPost } = UseData();
  const [, setModalIsOpen] = useModal;
  const [formInputValues, setFormInputValues] =
    useState<IInputList>(initialInputValues);

  const updateInputValue = (inputName: keyof IInputList, value: any) => {
    setFormInputValues((inputValues) => {
      const newInputValues = { ...inputValues };
      newInputValues[inputName] = value;
      return newInputValues;
    });
  };

  const addButtonHandlerClick = async () => {
    const currentDate = new Date();

    const newPost: IPost = {
      title: formInputValues.title,
      description: formInputValues.description,
      date: Timestamp.fromDate(currentDate),
    };

    const createPostResponse = await addNewPost(newPost);
    if (createPostResponse) {
      setModalIsOpen(false);
      setFormInputValues(initialInputValues);
    }
  };

  return (
    <Modal useModal={useModal}>
      <h1>Nova Postagem</h1>
      <Form>
        <Label>
          <strong>Título</strong>
          <Input
            value={formInputValues?.title}
            type="text"
            name="title"
            onChange={(event) => updateInputValue("title", event.target.value)}
          />
        </Label>
        <Label>
          <strong>Descrição</strong>
          <TextArea
            value={formInputValues?.description}
            name="description"
            onChange={(event) =>
              updateInputValue("description", event.target.value)
            }
          />
        </Label>
        <Button type="button" onClick={addButtonHandlerClick}>
          Salvar
        </Button>
      </Form>
    </Modal>
  );
};
