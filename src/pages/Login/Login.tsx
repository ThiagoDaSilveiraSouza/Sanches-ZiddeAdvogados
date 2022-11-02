import { FormEventHandler } from "react";
import { Navigate } from "react-router-dom";

// Hooks
import { UseLogin } from "../../Hooks";

// services
import { firebaseAuthWithEmailAndPassword } from "../../services";

// style
import { LoginContainer, Form } from "./style";

interface IFormElement extends HTMLFormElement {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
export const Login = () => {
  const { loginData } = UseLogin();

  const formHandleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formElement = event.target as IFormElement;
    const { email, password } = formElement;

    const authResponse = await firebaseAuthWithEmailAndPassword(
      email.value,
      password.value
    );

    console.log("authResponse", authResponse);
  };

  if (loginData.isLogged) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <LoginContainer>
      <Form onSubmit={formHandleSubmit}>
        <h3>Login</h3>
        <label>
          <strong>Email</strong>
          <input type="email" name="email" />
        </label>
        <label>
          <strong>Senha</strong>
          <input type="password" name="password" />
        </label>
        <button type="submit">Entrar</button>
      </Form>
    </LoginContainer>
  );
};
