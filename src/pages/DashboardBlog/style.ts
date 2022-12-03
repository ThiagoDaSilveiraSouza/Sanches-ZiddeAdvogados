import styled from "styled-components";

export const DashboardBlogContainer = styled.div`
  padding: 10px;
  box-sizing: border-box;
  overflow-x: auto;

  h1 {
    font-size: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 30px 0;
  h1{
    margin: 0;
  }
  `;

export const FiltersContainer = styled(Form)`
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
  max-width: 100%;
`;

export const NewPostButton = styled.button`
  font-size: 20px;
  height: fit-content;
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  strong, span {
    font-size: 25px;
  }
`
export const LabelId = styled(Label)`
  flex-direction: row;
  gap: 15px;
`

export const Input = styled.input`
  max-width: 100%;
  font-size: 20px;
`;
export const TextArea = styled.textarea`
  resize: none;
  max-width: 100%;
  height: 300px;
  font-size: 20px;
`;

export const Button = styled.button`
  font-size: 25px;
  user-select: none;
  cursor: pointer;
`