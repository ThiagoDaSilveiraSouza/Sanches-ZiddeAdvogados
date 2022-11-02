// pages
import { MenuProvider, LoginProvider } from "./context";

// routes
import { MainRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <MenuProvider>
          <MainRoutes />
        </MenuProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
