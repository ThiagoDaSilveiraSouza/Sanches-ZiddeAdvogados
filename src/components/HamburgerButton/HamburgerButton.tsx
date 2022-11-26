import { FC } from "react";

// style
import { HamburgerContent } from "./style";

interface IHamburgerButton {
  useButton: [boolean, (isOpen: boolean) => void];
  zIndex?: string;
  sizeToHidde?: string;
  color?: string;
  grow?: boolean;
}

export const HamburgerButton: FC<IHamburgerButton> = ({
  useButton,
  zIndex,
  sizeToHidde,
  color,
  grow = true,
}) => {
  const [isOpen, setIsOpen] = useButton;
  return (
    <HamburgerContent
      isOpen={isOpen}
      zIndex={zIndex}
      sizeToHidde={sizeToHidde}
      onClick={() => setIsOpen(!isOpen)}
      color={color}
      grow={grow}
    >
      <span />
    </HamburgerContent>
  );
};
