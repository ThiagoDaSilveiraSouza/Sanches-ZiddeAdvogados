// pages
import { FloatWhatsappButton } from "./components/FloaWhatsappButton";
import { MenuProvider, LoginProvider, DataProvider } from "./context";

// routes
import { MainRoutes } from "./routes";

function App() {
  console.log("add tags");
  return (
    <div className="App">
      <LoginProvider>
        <MenuProvider>
          <DataProvider>
            <MainRoutes />
            <FloatWhatsappButton />
          </DataProvider>
        </MenuProvider>
      </LoginProvider>
    </div>
  );
}

export default App;
