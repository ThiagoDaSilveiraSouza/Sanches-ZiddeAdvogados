import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";

// Hooks
import { UseLogin } from "../../Hooks";

// components
import { SideMenu } from "./components";

// style
import { DashboardBlogContainer } from "./style";

const DashboardContainer = styled.section`
  display: flex;
`;

export const Dashboard = () => {
  const { loginData } = UseLogin();

  if (!loginData.isLogged) {
    return <Navigate to="/admin" />;
  }

  return (
    <DashboardContainer>
      <SideMenu />
      <div className="centralizer">
        <DashboardBlogContainer>
          <Outlet />
        </DashboardBlogContainer>
      </div>
    </DashboardContainer>
  );
};
