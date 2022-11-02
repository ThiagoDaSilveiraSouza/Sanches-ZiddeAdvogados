import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ILoginConfig {
  isLogged: boolean;
  authResponse: {};
}

const loginConfigDefault: ILoginConfig = {
  isLogged: false,
  authResponse: {},
};

type ILoginContext = [ILoginConfig, Dispatch<SetStateAction<ILoginConfig>>];

export const LoginContext = createContext<ILoginContext>([
  loginConfigDefault,
  () => {},
]);

interface ILoginProvider {
  children: ReactNode;
}

export const LoginProvider: FC<ILoginProvider> = ({ children }) => {
  const [loginData, setLoginData] = useState<ILoginConfig>(loginConfigDefault);
  return (
    <LoginContext.Provider value={[loginData, setLoginData]}>
      {children}
    </LoginContext.Provider>
  );
};
