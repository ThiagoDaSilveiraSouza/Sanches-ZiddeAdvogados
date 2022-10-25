import { Dispatch, FC, SetStateAction } from "react";

// style
import { HamburgerContent } from "./style";

interface IHamburgerButton {
  useButton: [boolean, (isOpen: boolean) => void];
  zIndex?: string;
  sizeToHidde?: string;
}

export const HamburgerButton: FC<IHamburgerButton> = ({
  useButton,
  zIndex,
  sizeToHidde,
}) => {
  const [isOpen, setIsOpen] = useButton;
  return (
    <HamburgerContent
      isOpen={isOpen}
      zIndex={zIndex}
      sizeToHidde={sizeToHidde}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span />
    </HamburgerContent>
  );
};
