import { Dispatch, SetStateAction } from "react";

export const windowMouseOverEvent = (
  useMenuIsHidden: [boolean, Dispatch<SetStateAction<boolean>>],
  headerHeight: number
) => {
  const [menuIsHidden, setMenuIsHidden] = useMenuIsHidden;
  window.addEventListener("mouseover", (event: MouseEvent) => {
    if (event.y <= headerHeight) {
      menuIsHidden && setMenuIsHidden(false);
    }
  });
};