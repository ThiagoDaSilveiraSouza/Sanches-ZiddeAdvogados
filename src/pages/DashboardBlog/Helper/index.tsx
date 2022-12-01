import { NewPostModal, UpdatePost } from "../Components";

export const pageList = {
  newPost: <NewPostModal />,
  updatePost: <UpdatePost />,
};

export type IPageList = keyof typeof pageList;
