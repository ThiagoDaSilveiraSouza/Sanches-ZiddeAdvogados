// components
import { useState, useEffect } from "react";

// interfaces
import { ICompanyData, ITextHomeData } from "../../interfaces";

// components
import { Header } from "../../components";

// services
import { useFirebase } from "../../services";

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
  const { getHomePageData } = useFirebase();
  const [homePageTextData, setHomePageTextData] = useState<ITextHomeData>();

  const updateHomePagetextData = async () => {
    const homePageTextDataFromApi = await getHomePageData();
    if (homePageTextDataFromApi) {
      setHomePageTextData(homePageTextDataFromApi as ITextHomeData);
    }
  };

  useEffect(() => {
    updateHomePagetextData();
  }, []);

  return (
    <div>
      <Header />
      <MainBanner homePageTextData={homePageTextData as ITextHomeData} />
      <WhoWheAre homePageTextData={homePageTextData as ITextHomeData} />
      <OurMission homePageTextData={homePageTextData as ITextHomeData} />
      <OccupationArea />
      <Credentials />
      <Footer />
    </div>
  );
};
