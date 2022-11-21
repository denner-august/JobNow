import { useForm, useFieldArray } from "react-hook-form";

import styles from "./createJobForm.module.scss";

import { CreateJobFormProps } from "../../../../types/createJobForm";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./formValidation";
import React from "react";

export function CreateJobForm() {
  const {
    control,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<CreateJobFormProps>({
    resolver: yupResolver(schema),

    defaultValues: {
      Tecnologias: [{ linguagem: "" }],
    },
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "Tecnologias",
    }
  );

  const onSubmit = (data: any) => {
    console.log(data);
  };

  function addTecnologia(e: React.FormEvent) {
    e.preventDefault();
    append({
      linguagem: "",
    });
  }

  return (
    <div className={styles.ContainerJob}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{errors.TituloVaga?.message}</p>
        <label>Titulo da vaga</label>
        <input
          placeholder="Titulo da vaga"
          {...register("TituloVaga")}
          // defaultValue="titulo da vaga"
        />

        <p>{errors.Detalhes?.message}</p>
        <label>Diga os detalhes da vaga</label>
        <textarea
          placeholder="Detalhes da vaga"
          {...register("Detalhes")}
          // defaultValue="
          // Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus voluptate, deserunt, reprehenderit doloremque placeat voluptatem quod accusantium molestiae commodi eos provident aspernatur? Debitis voluptate tempore mollitia error. Architecto, repellendus."
        />

        <p>{errors.tipo?.message}</p>
        <label>Qual o tipo da vaga</label>
        <ul className={styles.tipo}>
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

        <p>{errors.Salario?.message}</p>
        <input
          placeholder="Qual o salario para a vaga"
          {...register("Salario")}
          // defaultValue={500}
        />

        <p>{errors.Experiencia?.message}</p>
        <label>experiencia</label>
        <input
          defaultValue="junior"
          placeholder="Experiencia"
          {...register("Experiencia")}
          disabled
        />

        <label>Quais tecnologias necessárias para a vaga?</label>

        <ul>
          {fields.map((Tecnologias, index) => (
            <li key={Tecnologias.id}>
              <input {...register(`Tecnologias.${index}.linguagem`)} required />
            </li>
          ))}
        </ul>

        <button onClick={addTecnologia}>Adicionar tecnologia</button>

        <input type="submit" />
      </form>
    </div>
  );
}
