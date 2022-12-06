import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 30px 0;
  h1{
    margin: 0;
  }

  label{
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    input{
      flex: 1 1 100%;
    }
  }

  button{
    width: fit-content;
    font-size: 20px;
  }
  `;