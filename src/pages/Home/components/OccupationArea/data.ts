import { ICard } from "./interface";

// img
import direitoContratualIcon from "/direito-contratual.svg";
import direitoSocietarioIcon from "/direito-societario.svg";
import direitoEmpresarialIcon from "/trabalho-empresarial.svg";

export const cardList: ICard[] = [
  {
    icon: direitoEmpresarialIcon,
    title: "Direito do trabalho empresarial",
    descriptionList: [
      "Prevenção de litígios trabalhistas.",
      "Defesa ou representação da empresa em processos ",
      "judiciais. ",
      "Defesa ou representação da empresa em processos ",
      "administrativos.",
      "Elaboração de contratos de trabalho e contratos de ",
      "terceirização de serviços.",
      "Gestão de processos internos como admissão e demissão. ",
      "Regularização de empregados.",
      "“Due Diligence”.",
      "Elaboração de Código de ética, Código de conduta e ",
      "Regulamento Interno.",
      "Auditoria trabalhista.,",
    ],
  },
  {
    icon: direitoSocietarioIcon,
    title: "Direito do Societário",
    descriptionList: [
      " Elaboração de contratos sociais, estatutos sociais, alterações contratuais, acordo de acionistas/quotistas, atas de assembleia entre outros documentos societários.",
      "Consultoria jurídica em todo o processo de M&A (fusões, cisões, incorporações, transformações e aquisições).",
      "Elaboração e análise crítica de contratos para constituição de consórcios.",
      "Representação de acionistas, diretores e membros do conselho de administração em reuniões e assembleias sociais.",
      "Mediação de disputas ou divergências entre sócios, em processos de aquisição ou venda de controle.",
      "Advocacia contenciosa em litígios societários.",
    ],
  },
  {
    icon: direitoContratualIcon,
    title: "Direito Contratual",
    descriptionList: [
      "Elaboração e revisão de contratos públicos e privados, bem como suporte durante toda a fase de negociação.",
      "Elaboração e análise de minutas contratuais e padronização de contratos.",
      "Consultoria jurídica dedicada para atender as necessidades da rotina comercial e administrativa do cliente.",
    ],
  },
];
