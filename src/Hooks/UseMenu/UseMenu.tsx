import { useContext } from "react";

// utils
import { freezeBody } from "../../utils";

// context
import { MenuContext } from "../../context";

export const UseMenu = () => {
  const [configMenu, setConfigMenu] = useContext(MenuContext);

  const setMenuIsOpen = (isOpen: boolean) => {
    freezeBody(isOpen);
    setConfigMenu((configMenu) => {
      return { ...configMenu, isOpen };
    });
  };

  return {
    menuIsOpen: configMenu.isOpen,
    setMenuIsOpen,
  };
};
