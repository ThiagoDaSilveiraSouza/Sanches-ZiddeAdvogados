import { useState } from "react";
import styled from "styled-components";

// DashboardBlog components
import { Header, NewPost, UpdatePost } from "./Components";

// DashboardBlog Helper
import { IPageList, pageList } from "./Helper";

const DashboardBlogContainer = styled.div`
  padding: 10px;
  box-sizing: border-box;

  h1 {
    font-size: 30px;
  }
`;

export const DashboardBlog = () => {
  const [currentPage, setCurrentPage] = useState<IPageList>("newPost");

  return (
    <DashboardBlogContainer>
      <Header setCurrentPage={setCurrentPage} />
      {pageList[currentPage]}
    </DashboardBlogContainer>
  );
};
