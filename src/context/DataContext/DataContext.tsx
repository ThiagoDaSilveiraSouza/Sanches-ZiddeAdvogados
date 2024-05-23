import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { ICompanyData, IPost } from "src/interfaces";

import { useFirebase } from "../../services";

export interface IData {
  companyData: ICompanyData;
  postsList: IPost[];
}

type IDataContext = [IData, Dispatch<SetStateAction<IData>>];

export const dataContextDefaultValue: IData = {
  companyData: {
    address: "",
    cep: "",
    neighborhood: "",
    state: "",
    email: "",
    lawyers: [],
    logo: {
      first: "",
      second: "",
    },
    name: "",
    phone: "",
    socialMedia: {
      facebook: "",
      instagram: "",
      whatsapp: "",
    },
  },
  postsList: [],
};

export const DataContext = createContext<IDataContext>([
  dataContextDefaultValue,
  () => {},
]);

interface IDataProvider {
  children: ReactNode;
}

export const DataProvider = ({ children }: IDataProvider) => {
  const [data, setData] = useState(dataContextDefaultValue);

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};
