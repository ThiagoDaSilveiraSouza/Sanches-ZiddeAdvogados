import { NewPost, UpdatePost } from "../Components";

export const pageList = {
  newPost: <NewPost />,
  updatePost: <UpdatePost />,
};

export type IPageList = keyof typeof pageList;
