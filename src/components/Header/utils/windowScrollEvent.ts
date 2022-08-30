import { Dispatch, SetStateAction } from "react";

export const windowScrollEvent = (
  useMenuIsHidden: [boolean, Dispatch<SetStateAction<boolean>>],
  headerHeight: number
) => {
  let lastPosition: number = 0;
  const [menuIsHidden, setMenuIsHidden] = useMenuIsHidden;
  window.addEventListener("scroll", () => {
    const verticalOffSet = window.scrollY;
    const isDown = lastPosition <= verticalOffSet;

    if (verticalOffSet > headerHeight) {
      if (isDown) {
        !menuIsHidden && setMenuIsHidden(true);
      } else {
        menuIsHidden && setMenuIsHidden(false);
      }
    } else {
      setMenuIsHidden(false);
    }
    lastPosition = verticalOffSet;
  });
};
