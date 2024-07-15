import { useState, FormEventHandler, useEffect } from "react";

// firebase
import { useFirebase } from "../../../../services/Firebase";

// hooks
import { UseNavMenu } from "../../hooks";

// styledComponents
import { Form } from "../../../../styledComponents";

// components
import { FormContainer, IInputData } from "../../../../components";
import { createUpdateStateProp } from "../../../../utils";
import { ITextHomeData } from "../../../../interfaces";

const textHomeDefaultData: ITextHomeData = {
  id: "",
  container1Title: "",
  container1Subtitle: "",
  container1Button: "",
  container2Title: "",
  container2Text1: "",
  container2Text2: "",
  container2Card1Title: "",
  container2Card1Text: "",
  container2Card2Title: "",
  container2Card2Text: "",
  container2Card3Title: "",
  container2Card3Text: "",
  container3Title: "",
  container3Card1Title: "",
  container3Card1Subtitle: "",
  container3Card1List: "",
  container3Card2Title: "",
  container3Card2Subtitle: "",
  container3Card2List: "",
};

export const PageTextHomePage = () => {
  const { getHomePageData, updateHomePageData } =
    useFirebase();
  const { navMenuState } = UseNavMenu();
  const [inputValues, setInputvalues] =
    useState<ITextHomeData>(textHomeDefaultData);

  const updateInputValues = createUpdateStateProp(inputValues, setInputvalues);

  const updateInputValuesFromDataBase = async () => {
    const responseFromDatabase = await getHomePageData();

    responseFromDatabase &&
      setInputvalues(responseFromDatabase as ITextHomeData);
  };

  useEffect(() => {
    updateInputValuesFromDataBase();
  }, []);

  const formHandlerSubmit: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    // const homePageData = await createHomePageData(inputValues);
    const responseFromApi = await updateHomePageData(inputValues);
    console.log("funcionou!", responseFromApi);
  };

  const container1InputData: IInputData[] = [
    {
      label: "Subtitulo:",
      props: {
        input: {
          value: inputValues?.container1Subtitle,
          onChange: (event) =>
            updateInputValues("container1Subtitle", event.target.value),
        },
      },
    },
    {
      label: "Título principal:",
      props: {
        input: {
          value: inputValues?.container1Title,
          onChange: (event) =>
            updateInputValues("container1Title", event.target.value),
        },
      },
    },
    {
      label: "Primeiro Botão:",
      props: {
        input: {
          value: inputValues?.container1Button,
          onChange: (event) =>
            updateInputValues("container1Button", event.target.value),
        },
      },
    },
  ];

  const container2InputData: IInputData[] = [
    {
      label: "Título do bloco da esquerda:",
      props: {
        input: {
          value: inputValues?.container2Title,
          onChange: (event) =>
            updateInputValues("container2Title", event.target.value),
        },
      },
    },
    {
      label: "Texto do bloco da esquerda:",
      props: {
        textArea: {
          value: inputValues?.container2Text1,
          onChange: (event) =>
            updateInputValues("container2Text1", event.target.value),
        },
      },
    },
    {
      label: "Texto do bloco da direita:",
      props: {
        textArea: {
          value: inputValues?.container2Text2,
          onChange: (event) =>
            updateInputValues("container2Text2", event.target.value),
        },
      },
    },
    {
      label: "Titulo do cartão 1:",
      props: {
        input: {
          value: inputValues?.container2Card1Title,
          onChange: (event) =>
            updateInputValues("container2Card1Title", event.target.value),
        },
      },
    },
    {
      label: "Texto do cartão 1:",
      props: {
        textArea: {
          value: inputValues?.container2Card1Text,
          onChange: (event) =>
            updateInputValues("container2Card1Text", event.target.value),
        },
      },
    },
    {
      label: "Titulo do cartão 2:",
      props: {
        input: {
          value: inputValues?.container2Card2Title,
          onChange: (event) =>
            updateInputValues("container2Card2Title", event.target.value),
        },
      },
    },
    {
      label: "Texto do cartão 2:",
      props: {
        textArea: {
          value: inputValues?.container2Card2Text,
          onChange: (event) =>
            updateInputValues("container2Card2Text", event.target.value),
        },
      },
    },
    {
      label: "Titulo do cartão 3:",
      props: {
        input: {
          value: inputValues?.container2Card3Title,
          onChange: (event) =>
            updateInputValues("container2Card3Title", event.target.value),
        },
      },
    },
    {
      label: "Texto cartão 3:",
      props: {
        textArea: {
          value: inputValues?.container2Card3Text,
          onChange: (event) =>
            updateInputValues("container2Card3Text", event.target.value),
        },
      },
    },
  ];

  const container3InputData: IInputData[] = [
    {
      label: "Titulo:",
      props: {
        input: {
          value: inputValues?.container3Title,
          onChange: (event) =>
            updateInputValues("container3Title", event.target.value),
        },
      },
    },
    {
      label: "Título do primeiro cartão:",
      props: {
        input: {
          value: inputValues?.container3Card1Title,
          onChange: (event) =>
            updateInputValues("container3Card1Title", event.target.value),
        },
      },
    },
    {
      label: `Lista de serviços do primeiro cartão: (separado por ";")`,
      props: {
        textArea: {
          value: inputValues?.container3Card1List,
          onChange: (event) =>
            updateInputValues("container3Card1List", event.target.value),
        },
      },
    },
    {
      label: "Título do segundo cartão:",
      props: {
        input: {
          value: inputValues?.container3Card2Title,
          onChange: (event) =>
            updateInputValues("container3Card2Title", event.target.value),
        },
      },
    },
    {
      label: `Lista de serviços do segundo cartão: (separado por ";")`,
      props: {
        textArea: {
          value: inputValues?.container3Card2List,
          onChange: (event) =>
            updateInputValues("container3Card2List", event.target.value),
        },
      },
    },
  ];

  return (
    <>
      {navMenuState.home.isOpen && (
        <Form onSubmit={formHandlerSubmit}>
          <h1>Home page</h1>
          <FormContainer
            title="Banner Principal:"
            InputDataList={container1InputData}
          />
          <FormContainer
            title="Quem somos:"
            InputDataList={container2InputData}
          />
          <FormContainer
            title="Áreas de atuação:"
            InputDataList={container3InputData}
          />
          <button>Atualizar</button>
        </Form>
      )}
    </>
  );
};
