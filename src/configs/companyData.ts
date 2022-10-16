// img
import firstLogo from "/logo.png";
import secondLogo from "/logo-2.svg";

// interfaces
import { ICompanyData } from "src/interfaces/ICompanyData";

export const companyData: ICompanyData = {
  name: "Sanches & Zidde advogados",
  phone: "(21) 99999-9999",
  address: "",
  number: "",
  email: "email@email.com.br",
  logo: {
    first: firstLogo,
    second: secondLogo,
  },
  socialMedia: {
    facebook: "",
    instagram: "",
    whatsapp: "",
  },
  lawyers: [
    {
      id: "1",
      name: "Dra. Rachel Sanches Zidde",
      title: "Sócia fundadora do escritório sanches & Zidde Advogados",
      skills: [],
      description: [
        "Advogada formada pela UNIFESO - Centro Universitário Serra dos Órgãos, inscrita na Ordem dos Advogados do Brasil, OAB/RJ 149.380.",
        "Especializada em Direito do Trabalho e Processo do Trabalho",
      ],
      img: "/rachel_sanches.jpg",
    },
  ],
};
