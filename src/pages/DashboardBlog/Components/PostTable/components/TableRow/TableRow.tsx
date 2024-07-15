import { Dispatch, SetStateAction } from "react";

import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

// utils
import { formatDate } from "../../../../../../utils";

// interfaces
import { IPost } from "../../../../../../interfaces";

// PostTable style
import { TableRowEditColumn } from "./style";

interface ITableRow {
  post: IPost;
  setTargetPostToDelete: Dispatch<SetStateAction<IPost | undefined>>;
  setConfirmDeletePostModalIsOpen: Dispatch<SetStateAction<boolean>>;
  setEditPostModalIsOpen: Dispatch<SetStateAction<boolean>>;
  setTargetPostToUpdate: Dispatch<SetStateAction<IPost | undefined>>;
}

export const TableRow = ({
  post,
  setTargetPostToDelete,
  setConfirmDeletePostModalIsOpen,
  setEditPostModalIsOpen,
  setTargetPostToUpdate,
}: ITableRow) => {
  const { getDayByTimestamp } = formatDate;
  // console.log(post);

  return (
    <tr>
      <td>{getDayByTimestamp(post?.date)}</td>
      <td>{post.title}</td>
      <TableRowEditColumn>
        <GrEdit
          size="20"
          onClick={() => {
            setEditPostModalIsOpen(true);
            setTargetPostToUpdate(post);
          }}
        />
        <RiDeleteBinLine
          size="20"
          onClick={() => {
            setTargetPostToDelete(post);
            setConfirmDeletePostModalIsOpen(true);
          }}
        />
      </TableRowEditColumn>
    </tr>
  );
};
