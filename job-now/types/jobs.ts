export type jobContainerProps = {
  job: jobProps;
  buttonNameVaga?: string;
  deletarVaga?: boolean;
};
export interface jobProps {
  id: number;
  titulo: string;
  detalhes: string;
  tipo: string;
  salario: number;
  experiencia: string;
  tecnologias: string[];
  logo: string;
}
