import { useForm } from "react-hook-form";

import styles from "./createJobForm.module.scss";

import { CreateJobFormProps } from "../../../../types/createJobForm";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./formValidation";

export function CreateJobForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateJobFormProps>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: CreateJobFormProps) => {
    console.log(data);
  };

  return (
    <div className={styles.ContainerJob}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{errors.TituloVaga?.message}</h1>
        <label>Titulo da vaga</label>
        <input
          placeholder="Titulo da vaga"
          {...register("TituloVaga")}
          defaultValue="titulo da vaga"
        />

        <h1>{errors.Detalhes?.message}</h1>
        <label>Diga os detalhes da vaga</label>
        <input
          placeholder="Detalhes da vaga"
          {...register("Detalhes")}
          defaultValue="detalhes da vaga"
        />

        <h1>{errors.tipo?.message}</h1>
        <label>Qual o tipo da vaga</label>
        <ul>
          <label>distancia </label>
          <input
            {...register("tipo")}
            type="radio"
            value="Presencial"
            placeholder="teste"
          />
          <label>Presencial </label>
          <input
            {...register("tipo")}
            type="radio"
            value="Distancia"
            defaultChecked
          />
          <label> Hibrido </label>
          <input {...register("tipo")} type="radio" value="Hibrido" />
        </ul>

        <h1>{errors.Salario?.message}</h1>
        <input
          placeholder="Qual o salario para a vaga"
          {...register("Salario")}
          defaultValue={500}
        />

        <h1>{errors.Experiencia?.message}</h1>
        <label>experiencia</label>
        <input
          defaultValue="junior"
          placeholder="Experiencia"
          {...register("Experiencia")}
          disabled
        />

        <h1>{errors.Tecnologias?.message}</h1>
        <label>Quais tecnologias necessárias para a vaga?</label>
        <input
          placeholder="Digite o que é necesario saber para a vaga"
          {...register("Tecnologias")}
          defaultValue="javascript"
        />

        <input type="submit" />
      </form>
    </div>
  );
}
