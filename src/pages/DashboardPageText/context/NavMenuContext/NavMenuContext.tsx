import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

// interface
import { IPageList } from "../../interface";

const defaultPageList: IPageList = {
  home: { isOpen: true },
};

type INavMenuContext = [IPageList, Dispatch<SetStateAction<IPageList>>];

export const NavMenuContext = createContext<INavMenuContext>([
  defaultPageList,
  () => {},
]);

interface INavMenuProvider {
  children: ReactNode;
}

export const NavMenuProvider = ({ children }: INavMenuProvider) => {
  const [navMenuState, setNavMenuState] = useState(defaultPageList);
  return (
    <NavMenuContext.Provider value={[navMenuState, setNavMenuState]}>
      {children}
    </NavMenuContext.Provider>
  );
};
