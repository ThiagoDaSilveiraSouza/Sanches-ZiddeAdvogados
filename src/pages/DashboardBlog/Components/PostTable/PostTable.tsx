import { useState } from "react";

import { Table, TableBody, TableContainer, TableHead } from "./style";

// interfaces
import { IPost } from "../../../../interfaces";

// PostTable components
import { ConfirmDeletePostModal, TableRow, EditPostModal } from "./components";

interface IPostTable {
  postList: IPost[];
}

export const PostTable = ({ postList }: IPostTable) => {
  const [confirmDeletePostModalIsOpen, setConfirmDeletePostModalIsOpen] =
    useState(false);
  const [targetPostToDelete, setTargetPostToDelete] = useState<IPost>();
  const [editPostModalIsOpen, setEditPostModalIsOpen] = useState(false);
  const [targetPostToUpdate, setTargetPostToUpdate] = useState<IPost>();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <tr>
            <th>Data</th>
            <th>Title</th>
            <th>Editar</th>
          </tr>
        </TableHead>
        <TableBody>
          {postList.map((currentPost) => (
            <TableRow
              key={currentPost.id}
              post={currentPost}
              setTargetPostToDelete={setTargetPostToDelete}
              setConfirmDeletePostModalIsOpen={setConfirmDeletePostModalIsOpen}
              setEditPostModalIsOpen={setEditPostModalIsOpen}
              setTargetPostToUpdate={setTargetPostToUpdate}
            />
          ))}
        </TableBody>
      </Table>
      <ConfirmDeletePostModal
        useModal={[
          confirmDeletePostModalIsOpen,
          setConfirmDeletePostModalIsOpen,
        ]}
        targetPostToDelete={targetPostToDelete}
      />
      <EditPostModal
        useModal={[editPostModalIsOpen, setEditPostModalIsOpen]}
        targetPostToUpdate={targetPostToUpdate}
      />
    </TableContainer>
  );
};
