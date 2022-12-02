// components
import { Dispatch, SetStateAction, useState, useEffect } from "react";

// interfaces
import { ICompanyData } from "../../interfaces";

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

type ISetCompanyData = Dispatch<SetStateAction<ICompanyData | undefined>>;

export const Home = () => {
  const [companyData, setCompanyData] = useState<ICompanyData>();

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
