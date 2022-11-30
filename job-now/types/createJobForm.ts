export interface CreateJobFormProps {
  logo: string;
  TituloVaga: string;
  Detalhes: string;
  tipo: ["home office", "presencial", "hibrido"];
  Salario: number;
  Experiencia: string;
  Tecnologias: { linguagem: String }[];
  name: string;
  empresa: string;
  emailVaga: string;
}
