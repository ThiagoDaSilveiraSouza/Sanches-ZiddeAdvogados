import styled from "styled-components";

export const LoginContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 300px;
  padding: 20px;
  border: 1px solid gray;
  box-shadow: 0 0 3px 0 gray;
  gap: 10px;
  box-sizing: border-box;
  h3 {
    margin: 0;
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;

    input {
      flex: 1 1 100%;
      padding: 5px;
    }
  }

  button {
    height: 30px;
    margin-top: 20px;
  }
`;
