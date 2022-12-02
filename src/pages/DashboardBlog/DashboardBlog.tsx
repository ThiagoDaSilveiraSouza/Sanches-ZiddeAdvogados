import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";
import styled from "styled-components";

// icons
import { MdOutlinePostAdd } from "react-icons/md";

// interfaces
import { IPost } from "../../interfaces";

// services
import { useFirebase } from "../../services";

// Dashboardblog utils
import { IFilters, useAllFilters } from "./utils";

// DashboardBlog components
import { NewPostModal, PostTable } from "./Components";

// DashboardBlog style
import { Form, Label, Input } from "./style";

const DashboardBlogContainer = styled.div`
  padding: 10px;
  box-sizing: border-box;
  overflow-x: auto;

  h1 {
    font-size: 30px;
  }
`;

const FiltersContainer = styled(Form)`
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
  max-width: 100%;
`;

const NewPostButton = styled.button`
  font-size: 20px;
  height: fit-content;
  cursor: pointer;
`;

export const DashboardBlog = () => {
  const [postList, setPostList] = useState<IPost[]>([]);
  const [NewPostModalIsOpen, setNewPostModalIsOpen] = useState(false);
  const [filters, setFilters] = useState<IFilters>({});
  const postListFiltered = useAllFilters(postList, filters);
  const { getPosts } = useFirebase();

  useEffect(() => {
    const updatePostList = async () => {
      const currentPostList = await getPosts();
      currentPostList && setPostList(currentPostList);
    };

    updatePostList();
  }, []);

  return (
    <DashboardBlogContainer>
      <h1>Posts</h1>
      <FiltersContainer>
        <Label>
          <strong>Id</strong>
          <Input
            onChange={(event) => {
              const id = event.target.value;
              setFilters((filters) => {
                return { ...filters, id };
              });
            }}
          />
        </Label>
        <Label>
          <strong>Título</strong>
          <Input
            name="title"
            onChange={(event) => {
              const title = event.target.value;
              setFilters((filters) => {
                return { ...filters, title };
              });
            }}
          />
        </Label>
        <Label>
          <strong>Data</strong>
          <Input
            name="dateValue"
            type="date"
            onChange={(event) => {
              setFilters((filters) => {
                const { value } = event.target;
                const dateValue = new Date(value + " 12:00");
                const newDate = Timestamp.fromDate(dateValue);

                if (!!value) {
                  return { ...filters, date: newDate };
                }

                const { date, ...filtersRest } = filters;
                return { ...filtersRest };
              });
            }}
          />
        </Label>
        <NewPostButton
          type="button"
          onClick={() => setNewPostModalIsOpen(true)}
        >
          Novo Post <MdOutlinePostAdd />
        </NewPostButton>
      </FiltersContainer>
      <PostTable postList={postListFiltered} />
      <NewPostModal useModal={[NewPostModalIsOpen, setNewPostModalIsOpen]} />
    </DashboardBlogContainer>
  );
};
