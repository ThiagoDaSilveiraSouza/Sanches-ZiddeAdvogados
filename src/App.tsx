// pages
import { MenuProvider } from "./context";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <MenuProvider>
        <Home />
      </MenuProvider>
    </div>
  );
}

export default App;
