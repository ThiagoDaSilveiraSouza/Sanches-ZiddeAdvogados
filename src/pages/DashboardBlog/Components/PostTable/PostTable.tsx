import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

// utils
import { formatDate } from "../../../../utils";

// interfaces
import { IPost } from "../../../../interfaces";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRowEditColumn,
} from "./style";

interface ITableRow {
  post: IPost;
}

export const TableRow = ({ post }: ITableRow) => {
  const { getDayByTimestamp } = formatDate;

  return (
    <tr>
      <td>{post.id}</td>
      <td>{getDayByTimestamp(post?.date)}</td>
      <td>{post.title}</td>
      <TableRowEditColumn>
        <GrEdit size="20" />
        <RiDeleteBinLine size="20" />
      </TableRowEditColumn>
    </tr>
  );
};

interface IPostTable {
  postList: IPost[];
}

export const PostTable = ({ postList }: IPostTable) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Title</th>
            <th>Editar</th>
          </tr>
        </TableHead>
        <TableBody>
          {postList.map((currentPost) => (
            <TableRow post={currentPost} key={currentPost.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
