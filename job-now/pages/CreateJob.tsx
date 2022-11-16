import { HeaderDefaul } from "../components/homePage/components/headerLogin";

import styles from "../styles/createJob.module.scss";

import { useForm } from "react-hook-form";

export default function CreateJob() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  // falta colocar a logo da empresa como input
  // tipar os dados do form

  return (
    <>
      <HeaderDefaul />
      <div className={styles.ContainerJob}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Titulo da vaga</label>
          <input placeholder="Titulo da vaga" {...register("TituloVaga")} />

          <label>Diga os detalhes da vaga</label>
          <input placeholder="Detalhes da vaga" {...register("Detalhes")} />

          <label>Qual o tipo da vaga</label>
          <ul>
            <label>distancia </label>
            <input
              {...register("radio")}
              type="radio"
              value="Presencial"
              placeholder="teste"
            />
            <label>Presencial </label>
            <input {...register("radio")} type="radio" value="Distancia" />
            <label> Hibrido </label>
            <input {...register("radio")} type="radio" value="Hibrido" />
          </ul>
          <input
            placeholder="Qual o salario para a vaga"
            {...register("Salario")}
          />
          <label>experiencia</label>
          <input
            placeholder="Experiencia"
            {...register("Experiencia")}
            value="junior"
            disabled
          />
          <label>Quais tecnologias necessárias para a vaga?</label>
          <input
            placeholder="Digite o que é necesario saber para a vaga"
            {...register("tecnologias")}
          />

          <input type="submit" />
        </form>
      </div>
    </>
  );
}
