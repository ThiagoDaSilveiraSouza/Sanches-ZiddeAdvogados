import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { ICompanyData } from "src/interfaces";

import { useFirebase } from "../../services";

interface IData {
  companyData: ICompanyData;
}

type IDataContext = [IData, Dispatch<SetStateAction<IData>>];

export const dataContextDefaultValue: IData = {
  companyData: {
    address: "",
    email: "",
    lawyers: [],
    logo: {
      first: "",
      second: "",
    },
    name: "",
    number: "",
    phone: "",
    socialMedia: {
      facebook: "",
      instagram: "",
      whatsapp: "",
    },
  },
};

export const DataContext = createContext<IDataContext>([
  dataContextDefaultValue,
  () => {},
]);

interface IDataProvider {
  children: ReactNode;
}

const updateCompanyData = async (setData: Dispatch<SetStateAction<IData>>) => {
  const { getCompanyData } = useFirebase();

  const companyData = await getCompanyData();

  if (companyData) {
    setData((data) => {
      data.companyData = companyData;
      return data;
    });
  }
};

export const DataProvider = ({ children }: IDataProvider) => {
  const [data, setData] = useState(dataContextDefaultValue);
  useEffect(() => {
    updateCompanyData(setData);
  }, []);

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};
