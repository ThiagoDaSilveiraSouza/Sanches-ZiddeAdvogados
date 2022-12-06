import styled from "styled-components"
import { IProps } from "./interfaces"

export const BlockContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  h2{
    width: fit-content;
    border-bottom: 5px solid black;
    text-transform: uppercase;
  }
`
export const InputsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
`

interface ILabel {
  type: keyof IProps
}
export const Label = styled.label<ILabel>`
  /* flex: ${({ type }) => type === "textArea" ? "1 1 300px" : "0 1 300px"}; */
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 5px;
  height: fit-content;
  max-width: ${({ type }) => type === "textArea" ? "100%" : "300px"};;

  > * {
    flex: 1 1 auto;
  }

`

export const Input = styled.input`
  width: 100%;
`

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
`

export const Select = styled.select``

export const Option = styled.option``

export const Button = styled.button``

