import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";

// icons
import { MdOutlinePostAdd } from "react-icons/md";

// hooks
import { UseData } from "../../Hooks";

// Dashboardblog utils
import { IFilters, useAllFilters } from "./utils";

// DashboardBlog components
import { NewPostModal, PostTable } from "./Components";

// DashboardBlog style
import { FiltersContainer, NewPostButton, Label, Input } from "./style";

export const DashboardBlog = () => {
  const { postList, reloadPostListFromApi } = UseData();
  const [NewPostModalIsOpen, setNewPostModalIsOpen] = useState(false);
  const [filters, setFilters] = useState<IFilters>({});
  const postListFiltered = useAllFilters(postList, filters);

  useEffect(() => {
    reloadPostListFromApi();
  }, []);

  return (
    <>
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
      {/* Modals */}
      <NewPostModal useModal={[NewPostModalIsOpen, setNewPostModalIsOpen]} />
      <PostTable postList={postListFiltered} />
    </>
  );
};
