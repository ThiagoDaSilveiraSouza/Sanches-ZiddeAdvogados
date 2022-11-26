import {
  Dispatch,
  SetStateAction,
  FormEventHandler,
  useEffect,
  useState,
} from "react";

// interfaces
import { IPost } from "src/interfaces/IPost";

//services
import { useFirebase } from "../../../../../../services";

// components
import { Modal } from "../../../../../../components";

// DashboardBlog style
import { Form, Input, Label } from "../../../../style";

//PostItem style
import { SearchListContainer, TrTitle, TrItem } from "./style";

interface IPostItem {
  post: IPost;
}

const PostItem = ({ post }: IPostItem) => {
  const { id, title, date } = post;
  const updateDate = new Date(date.seconds);
  const day = updateDate.getUTCDay().toString().padStart(2, "0");
  const month = (updateDate.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = updateDate.getUTCFullYear();
  const stringDate = `${day}/${month}/${year}`;
  console.log("post", post);

  return (
    <TrItem>
      <td>{id}</td>
      <td>{stringDate}</td>
      <td>{title}</td>
    </TrItem>
  );
};
interface IFormEventTarget extends EventTarget {
  title: HTMLInputElement;
  description: HTMLInputElement;
  date: HTMLInputElement;
}

interface ISearchPostModal {
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const SearchPostModal = ({ useModal }: ISearchPostModal) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { getPosts } = useFirebase();

  const formHandlerSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const { title, description, date } = event.target as IFormEventTarget;
  };

  useEffect(() => {
    const updatePosts = async () => {
      const postList = (await getPosts()) as IPost[];
      const havePost = !!postList?.length;
      if (havePost) {
        setPosts(postList);
      }
    };
    updatePosts();
  }, []);

  return (
    <Modal useModal={useModal}>
      <Form>
        <h1>Filtrar por:</h1>
        <Label>
          <strong>Data:</strong>
          <Input type="date" name="date" />
        </Label>
        <Label>
          <strong>Id:</strong>
          <Input name="idValue" />
        </Label>
        <Label>
          <strong>titulo:</strong>
          <Input name="title" />
        </Label>
      </Form>
      <SearchListContainer>
        <TrTitle>
          <th>Id</th>
          <th>Data</th>
          <th>Título</th>
        </TrTitle>
        <div>
          {posts.map((currentPost) => {
            if (currentPost) {
              return (
                <PostItem
                  post={currentPost}
                  key={currentPost?.id || currentPost.title}
                />
              );
            }
          })}
        </div>
      </SearchListContainer>
    </Modal>
  );
};
