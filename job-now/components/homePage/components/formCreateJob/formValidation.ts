import * as yup from "yup";

export const schema = yup
  .object({
    TituloVaga: yup.string().required("Escreva o titulo da vaga"),
    Detalhes: yup.string().required("Escrava os detalhes da vaga"),
    tipo: yup.string().required("qual o tipo da vaga?"),
    Salario: yup
      .number()
      .required("Qual o salario para essa vaga?")
      .typeError("Qual o salario para essa vaga?"),
    Tecnologias: yup
      .array(
        yup.object({
          linguagem: yup.string().required("linguagem ncessario"),
        })
      )
      .required(),
  })
  .required()
  .required();
