// components
import { Header } from "../../components";

// Home components
import { OccupationArea } from "./components";

import { MainBanner } from "./components";

export const Home = () => {
  return (
    <div>
      <Header />
      <MainBanner/>
      <OccupationArea />
    </div>
  );
};
