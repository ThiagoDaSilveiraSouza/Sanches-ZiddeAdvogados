import { ICard } from "./interface";

// img
import direitoAdministrativoIcon from "/direito-administrativo.svg";
import direitoCivilIcon from "/direito-civil.svg";
import direitoDoTrabalhoIcon from "/trabalho-empresarial.svg";
import direitoContratualIcon from "/direito-contratual.svg";
import direitoSocietarioIcon from "/direito-societario.svg";
import direitoTributarioIcon from "/direito-tributario.svg";

export const cardList: ICard[] = [
  {
    icon: direitoDoTrabalhoIcon,
    title: "Direito do trabalho",
    subTitle: "Ações trabalhistas especializada em:",
    descriptionList: [
      "Adicional de Periculosidade",
      "Adicional de Insalubridade",
      "Acidente de Trabalho",
      "Doença do Trabalho",
      "Estabilidade da Gestante",
    ],
  },
  {
    icon: direitoContratualIcon,
    title: "Direito previdenciário",
    subTitle:
      "Requerimentos administrativos e judiciais de benefícios previdenciários:",
    descriptionList: [
      "Benefício de Prestação Continuada (LOAS)",
      "Auxílio por Incapacidade Temporária (auxílio-doença)",
      "Aposentadoria por Idade",
      "Aposentadoria por Tempo de Contribuição",
      "Aposentadoria Especial",
      "Aposentadoria da Pessoa com Deficiência",
      "Salário Maternidade",
      "Auxílio-acidente",
      "Pensão por morte",
      "Aposentadoria Rural",
      "Planejamento Previdenciário",
      "Recolhimento em atraso",
      "Preenchimento correto da GPS",
      "Orientação para Compensação na folha e Retificação das guias de recolhimento (GFIP)",
      "Cálculos previdenciários",
    ],
  },
  {
    icon: direitoCivilIcon,
    title: "Direito Civil",
    subTitle: "Ações civis especializadas em:",
    descriptionList: [
      "assessoria",
      "elaboração e negociação de contratos",
      "Responsabilidade civil: danos materiais, danos morais",
      "violação à imagem e a honra",
    ],
  },
  {
    icon: direitoAdministrativoIcon,
    title: "Direito Administrativo",
    subTitle: "Ações administrativas especializadas em:",
    descriptionList: [
      "Análise de editais",
      "Recursos Administrativos",
      "Mandado de Segurança",
      "Defesa na aplicação de penalidades",
    ],
  },
  {
    icon: direitoSocietarioIcon,
    title: "Direito Societário",
    subTitle: "Ações societárias especializadas em:",
    descriptionList: [
      "Fusões e Aquisições",
      "Restruturação societária",
      "Gestão Patrimonial, Família e Sucessões",
      "Contencioso societário",
    ],
  },
  {
    icon: direitoTributarioIcon,
    title: "Direito Tributário",
    subTitle: "Ações tributárias especializadas em:",
    descriptionList: [
      "Revisão tributária",
      "Otimização de processos tributários",
      "Planejamento tributário",
      "Estudos objetivando redução de carga tributária",
      "Reestruturação societária",
      "Recuperação de créditos tributários",
    ],
  },
];
