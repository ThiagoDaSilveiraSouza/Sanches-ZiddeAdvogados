import { ICard } from "./interface";

// img
import direitoContratualIcon from "/direito-contratual.svg";
import direitoSocietarioIcon from "/direito-societario.svg";

export const cardList: ICard[] = [
  {
    icon: direitoSocietarioIcon,
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
      " Benefício de Prestação Continuada (LOAS)",
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
];
