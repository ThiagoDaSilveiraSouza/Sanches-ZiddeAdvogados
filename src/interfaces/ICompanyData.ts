export interface ILawyers {
  id: string;
  name: string;
  title: string;
  skills: string[];
  description: string[];
  img?: string;
}

export interface ICompanyData {
  name: string;
  phone: string;
  address: string;
  number: string;
  email: string;
  logo: {
    first: string;
    second: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
  lawyers: ILawyers[];
}
