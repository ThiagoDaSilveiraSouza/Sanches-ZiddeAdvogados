import { Dispatch, SetStateAction } from "react";

export const windowMouseOverEvent = (
  useMenuIsHidden: [boolean, Dispatch<SetStateAction<boolean>>],
  headerHeight: number
) => {
  const [, setMenuIsHidden] = useMenuIsHidden;
  window.addEventListener("mouseover", (event: MouseEvent) => {
    if (event.y <= headerHeight) {
      setMenuIsHidden(false);
    }
  });
};
