import { useState } from "react";
import { FormEventHandler } from "react";
import { Timestamp } from "firebase/firestore";

// services
import { useFirebase } from "../../../../services";
import { IPost } from "../../../../interfaces/IPost";

// DashboardBlog components
import { Form, TextArea, Input, Button, Label } from "../../style";

interface IFormEventHandle extends EventTarget {
  title: HTMLInputElement;
  description: HTMLTextAreaElement;
}

export const NewPost = () => {
  const { createPost } = useFirebase();
  const formHandlerSubmit: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const { title, description } = event.target as IFormEventHandle;
    const currentDate = new Date();

    const newPost: IPost = {
      title: title.value,
      description: description.value,
      date: Timestamp.fromDate(currentDate),
    };

    console.log("newPost", newPost);

    const createPostResponse = await createPost(newPost);
    console.log(createPostResponse);
  };

  return (
    <>
      <h1>Nova Postagem</h1>
      <Form onSubmit={formHandlerSubmit}>
        <Label>
          <strong>Título</strong>
          <Input type="text" name="title" />
        </Label>
        <Label>
          <strong>Descrição</strong>
          <TextArea name="description" />
        </Label>
        <Button>Salvar</Button>
      </Form>
    </>
  );
};
