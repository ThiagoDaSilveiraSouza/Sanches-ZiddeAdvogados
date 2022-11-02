import { useContext, useEffect } from "react";

// services
import { isLoggedOnFirebase } from "../../services";

// context
import { LoginContext } from "../../context";
import { saveOnLocalStorage } from "../../utils";

export const UseLogin = () => {
  const [loginData, setLoginData] = useContext(LoginContext);

  const setAuthResponse = (authResponse: {}) => {
    setLoginData((loginData) => {
      const updatedLoginData = { ...loginData, authResponse };
      saveOnLocalStorage("loginData", updatedLoginData);
      return updatedLoginData;
    });
  };

  const setIsLogged = (isLogged: boolean) => {
    setLoginData((loginData) => {
      const updatedLoginData = { ...loginData, isLogged };
      saveOnLocalStorage("loginData", updatedLoginData);
      return updatedLoginData;
    });
  };

  useEffect(() => {
    isLoggedOnFirebase(setIsLogged);
  }, []);

  return {
    loginData,
    setUserData: setAuthResponse,
    setIsLogged,
  };
};
