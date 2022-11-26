import { useState } from "react";
import { FormEventHandler } from "react";

// DashboardBlog components
import { Form, TextArea, Input, Button, Label } from "../../style";

export const NewPost = () => {
  const formHandlerSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
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
