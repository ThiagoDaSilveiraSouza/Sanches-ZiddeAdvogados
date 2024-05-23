import { OptionHTMLAttributes } from "react";
import { IProps } from "./interfaces";

// PageTextHomePage style
import {
  BlockContainer,
  InputsContainer,
  Label,
  Input,
  Button,
  Textarea,
  Select,
  Option,
} from "./style";

interface IOptions {
  props?: OptionHTMLAttributes<HTMLOptionElement>;
  text?: string;
}

export interface IInputData {
  label?: string;
  props?: IProps;
  optionsList?: IOptions[];
}

interface IInputElement {
  inputData: IInputData;
}

const InputElement = ({ inputData }: IInputElement) => {
  const { props, label, optionsList: selectOptionsList } = inputData;

  const inputTypeList = {
    input: <Input {...props?.input} />,
    textArea: <Textarea {...{ rows: 10, ...props?.textArea }} />,
    button: <Button {...props?.button}>{label}</Button>,
    select: (
      <Select {...props?.select}>
        {selectOptionsList?.map((currentOption, index) => (
          <Option
            key={`${currentOption?.props?.value}-${index}`}
            {...currentOption.props}
          >
            {currentOption.text}
          </Option>
        ))}
      </Select>
    ),
  };

  const [currentTypeName] = (props && Object.keys(props)) || ["input"];
  const isAButton = currentTypeName === "button";

  return currentTypeName ? (
    <Label type={currentTypeName as keyof IProps}>
      {!isAButton && <strong>{label}</strong>}
      {inputTypeList[currentTypeName as keyof typeof inputTypeList]}
    </Label>
  ) : null;
};

interface IContainer {
  title?: string;
  InputDataList?: IInputData[];
}

export const FormContainer = ({ title, InputDataList }: IContainer) => {
  const createInputKey = (inputIndex: number) =>
    `container-${title}-${inputIndex}`;

  return (
    <BlockContainer>
      {title && <h2>{title}</h2>}

      <InputsContainer>
        {InputDataList?.map((currentInputData, index) => {
          return (
            <InputElement
              key={createInputKey(index)}
              inputData={currentInputData}
            />
          );
        })}
      </InputsContainer>
    </BlockContainer>
  );
};
