import { useContext } from "react";

import { NavMenuContext } from "../../context";
import { IPageList } from "../../interface";

export const UseNavMenu = () => {
  const [navMenuState, setNavMenuState] = useContext(NavMenuContext);

  const checkMenuItem = (propKey: keyof IPageList) => {
    setNavMenuState((menuState) => {
      const newMenuState: IPageList = { ...menuState };

      Object.keys(newMenuState).forEach((currentMenuName) => {
        const isTargetMenu = currentMenuName === propKey;

        newMenuState[currentMenuName as keyof IPageList].isOpen = isTargetMenu;
      });

      return newMenuState;
    });
  };

  return {
    navMenuState,
    checkMenuItem,
  };
};
