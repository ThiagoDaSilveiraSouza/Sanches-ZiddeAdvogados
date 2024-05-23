// components
import { Header } from "../../components";

// Home components
import {
  OccupationArea,
  MainBanner,
  WhoWheAre,
  OurMission,
  Credentials,
  Footer,
} from "./components";

export const Home = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <WhoWheAre />
      <OurMission />
      <OccupationArea />
      <Credentials />
      <Footer />
    </div>
  );
};
