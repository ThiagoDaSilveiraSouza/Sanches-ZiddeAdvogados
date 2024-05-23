import { MouseEventHandler } from "react";

// style
import { PageMenuContainer, PageMenuButtonContainer } from "./style";

// interface
import { IPage, IPageList } from "../../interface";
import { UseNavMenu } from "../../hooks";

interface IMenuButton {
  name: string;
  isChecked: boolean;
  buttonHandleClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const MenuButton = ({ name, isChecked, buttonHandleClick }: IMenuButton) => {
  return (
    <PageMenuButtonContainer
      isChecked={isChecked}
      disabled={isChecked}
      onClick={buttonHandleClick}
      type="button"
    >
      {name}
    </PageMenuButtonContainer>
  );
};

export const PageMenu = () => {
  const { navMenuState, checkMenuItem } = UseNavMenu();
  const menuStateList = Object.entries(navMenuState);

  return (
    <PageMenuContainer>
      {menuStateList.map(([key, value], index) => {
        const { isOpen } = value as IPage;
        return (
          <MenuButton
            key={`page-menu-${index}`}
            name={key}
            isChecked={isOpen}
            buttonHandleClick={() => checkMenuItem(key as keyof IPageList)}
          />
        );
      })}
    </PageMenuContainer>
  );
};
