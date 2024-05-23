export interface ILawyers {
  id: string;
  name: string;
  title: string;
  skills: string[];
  description: string[];
  img?: string;
}

export interface ICompanyData {
  id?: string;
  name: string;
  phone: string;
  address: string;
  neighborhood: string;
  state: string;
  cep: string;
  email: string;
  complement?: string;
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
