export interface CreateJobFormProps {
  id: number;
  logo: string;
  TituloVaga: string;
  Detalhes: string;
  tipo: ["home office", "presencial", "hibrido"];
  Salario: number;
  Experiencia: string;
  Tecnologias: { linguagem: String }[];
  name: string;
  emailVaga: string;
  dono:string
}
