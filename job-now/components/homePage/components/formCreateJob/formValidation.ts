import * as yup from "yup";

export const schema = yup
  .object({
    TituloVaga: yup.string().required("Escreva o titulo da vaga"),
    Detalhes: yup.string().required("Escrava os detalhes da vaga"),
    tipo: yup.string().required("qual o tipo da vaga?"),
    Salario: yup.string().required("qaul o salario para essa vaga?"),
    Experiencia: yup.string().required(),
    Tecnologias: yup
      .string()
      .required("quais tecnologias vão ser usadas nessa vaga"),
  })
  .required();
