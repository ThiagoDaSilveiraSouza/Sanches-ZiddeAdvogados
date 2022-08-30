import { Dispatch, SetStateAction } from "react";
import { debounce } from "../../../utils";

export const windowScrollEvent = (
  useMenuIsHidden: [boolean, Dispatch<SetStateAction<boolean>>],
  headerHeight: number
) => {
  let lastPosition: number = 0;
  const [menuIsHidden, setMenuIsHidden] = useMenuIsHidden;
  window.addEventListener(
    "scroll",
    debounce(() => {
      const verticalOffSet = window.scrollY;
      const isDown = lastPosition < verticalOffSet;

      if (verticalOffSet > headerHeight) {
        if (isDown) {
          !menuIsHidden && setMenuIsHidden(true);
          console.log("down");
        } else {
          menuIsHidden && setMenuIsHidden(false);
          console.log("up", menuIsHidden);
        }
      } else {
        setMenuIsHidden(false);
      }
      lastPosition = verticalOffSet;
    })
  );
};
