import { CreateJobFormProps } from "./createJobForm";

export type jobContainerProps = {
  job: CreateJobFormProps;
  buttonNameVaga?: string;
  deletarVaga?: boolean;
};

export interface ExibiJobsProps {
  job: jobProps;
  buttonNameVaga?: string;
  deletarVaga?: boolean;
}

export interface jobProps {
  id: number;
  TituloVaga: string;
  Detalhes: string;
  tipo: string[];
  Salario: number;
  Experiencia: string;
  Tecnologias: string[] | {}[];
  logo: string;
}

export interface jobId extends jobProps {
  emailVaga: string;
  TituloVaga: string;
  salario: String;
  Experiencia: string;
  Detalhes: string;
}
