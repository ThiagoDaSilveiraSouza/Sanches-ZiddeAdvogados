import { FormEventHandler, useState, useEffect } from "react";
import { useFirebase } from "../../../../services";

// DashboardBlog components
import { Form, Input, TextArea, Button, Label, LabelId } from "../../style";
import { SearchPostModal } from "./Components";

interface IFormEventTarget extends EventTarget {
  title: HTMLInputElement;
  description: HTMLInputElement;
  date: HTMLInputElement;
}

export const UpdatePost = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { getPosts } = useFirebase();
  const formHandlerSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const { title, description, date } = event.target as IFormEventTarget;
  };

  useEffect(() => {
    const teste = async () => {
      const data = await getPosts();
      console.log("data", data);
    };

    teste();
  }, []);
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
