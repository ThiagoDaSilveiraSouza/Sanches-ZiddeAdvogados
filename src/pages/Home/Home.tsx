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

// configs
import { companyData } from "../../configs";

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
