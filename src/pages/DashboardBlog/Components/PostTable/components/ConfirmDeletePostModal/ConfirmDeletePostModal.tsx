import { Dispatch, SetStateAction } from "react";

// interfaces
import { IPost } from "../../../../../../interfaces";

// Hooks
import { UseData } from "../../../../../../Hooks";

// components
import { Modal } from "../../../../../../components";

interface IConfirmDeletePostModal {
  targetPostToDelete?: IPost;
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const ConfirmDeletePostModal = ({
  targetPostToDelete,
  useModal,
}: IConfirmDeletePostModal) => {
  const { removePost } = UseData();
  const [, modalIsOpen] = useModal;

  const deleteButtonHandleClick = (postIsDeleted: boolean) => {
    modalIsOpen(false);
    if (postIsDeleted) {
      targetPostToDelete?.id && removePost(targetPostToDelete.id);
    }
  };

  return (
    <Modal useModal={useModal}>
      <p>
        Tem certeza que deseja deletar o post de titulo: "
        {targetPostToDelete?.title}"?
      </p>
      <div style={{ display: "flex", gap: "15px" }}>
        <button
          onClick={() => {
            deleteButtonHandleClick(true);
          }}
        >
          Sim
        </button>
        <button
          onClick={() => {
            deleteButtonHandleClick(false);
          }}
        >
          Não
        </button>
      </div>
    </Modal>
  );
};
