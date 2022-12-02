// pages
import { MenuProvider, LoginProvider, DataProvider } from "./context";

// routes
import { MainRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <MenuProvider>
          <DataProvider>
            <MainRoutes />
          </DataProvider>
        </MenuProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
