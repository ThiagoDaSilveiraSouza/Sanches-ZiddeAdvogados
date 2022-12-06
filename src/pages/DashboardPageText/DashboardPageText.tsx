import { Form } from "../../styledComponents";
import { DashboardPageContainer } from "./style";

// DashboardPageText pages
import { PageTextHomePage } from "./pages";

// DashboardPageText components
import { PageMenu } from "./components";

// DashboardPageText context
import { NavMenuProvider } from "./context";

export const DashboardPageText = () => {
  return (
    <NavMenuProvider>
      <DashboardPageContainer>
        <h1>Texto do Site</h1>
        <PageMenu />
        <PageTextHomePage />
      </DashboardPageContainer>
    </NavMenuProvider>
  );
};
