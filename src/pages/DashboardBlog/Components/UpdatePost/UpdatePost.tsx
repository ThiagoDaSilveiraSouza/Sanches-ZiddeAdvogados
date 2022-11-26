import { FormEventHandler, useState } from "react";

// DashboardBlog components
import { Form, Input, TextArea, Button, Label, LabelId } from "../../style";
import { SearchPostModal } from "./Components";

export const UpdatePost = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const formHandlerSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <h1>Alterar Postagem</h1>

      <Button onClick={() => setModalIsOpen(true)}>Buscar Postagem</Button>
      <Form onSubmit={formHandlerSubmit}>
        <LabelId>
          <strong>Número do Id:</strong>
          <span>001</span>
        </LabelId>
        <Label>
          <strong>Título</strong>
          <Input type="text" name="title" disabled />
        </Label>
        <Label>
          <strong>Descrição</strong>
          <TextArea name="description" disabled />
        </Label>
        <Button disabled>Salvar</Button>
      </Form>
      <SearchPostModal useModal={[modalIsOpen, setModalIsOpen]} />
    </>
  );
};
