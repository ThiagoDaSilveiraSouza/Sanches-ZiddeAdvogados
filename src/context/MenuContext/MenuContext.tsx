import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IMenuConfig {
  isOpen: boolean;
}

type IMenuContext = [
  menuConfig: IMenuConfig,
  setMenuConfig: Dispatch<SetStateAction<IMenuConfig>>
];

const defaultConfig = {
  isOpen: false,
};

export const MenuContext = createContext<IMenuContext>([
  defaultConfig,
  () => {},
]);

interface IMenuProvider {
  children?: ReactNode;
}

export const MenuProvider: FC<IMenuProvider> = ({ children }) => {
  const [config, setConfig] = useState<IMenuConfig>(defaultConfig);

  return (
    <MenuContext.Provider value={[config, setConfig]}>
      {children}
    </MenuContext.Provider>
  );
};
