import { useForm, useFieldArray } from "react-hook-form";
import React from "react";

import styles from "./createJobForm.module.scss";

import { CreateJobFormProps } from "../../../../types/createJobForm";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../yup/formValidation";
import { api } from "../../../../axios";

export function CreateJobForm() {
  const {
    control,
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<CreateJobFormProps>({
    resolver: yupResolver(schema),

    defaultValues: {
      Tecnologias: [
        { linguagem: "javascript" },
        { linguagem: "python" },
        { linguagem: "c++" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "Tecnologias",
  });

  async function onSubmit(data: CreateJobFormProps) {
    api.post("/api/createJob", {
      data,
    });
  }

  function addTecnologia(e: React.FormEvent) {
    e.preventDefault();
    append({
      linguagem: "",
    });
  }

  function removeTecnologia(e: React.FormEvent, index: number) {
    e.preventDefault();
    remove(index);
  }

  return (
    <div className={styles.ContainerJob}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{errors.TituloVaga?.message}</p>
        <label>Titulo da vaga</label>
        <input
          placeholder="Titulo da vaga"
          {...register("TituloVaga")}
          defaultValue="titulo da vaga"
        />

        <label> Email para receber os curriculos </label>

        <p>{errors.emailVaga?.message}</p>
        <input
          placeholder="Email para os candidatos enviarem o curriculo"
          {...register("emailVaga")}
          defaultValue="javascript@gmail.com"
        />

        <p>{errors.Detalhes?.message}</p>
        <label>Diga os detalhes da vaga</label>
        <textarea
          placeholder="Detalhes da vaga"
          {...register("Detalhes")}
          defaultValue="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus voluptate, deserunt, reprehenderit doloremque placeat voluptatem quod accusantium molestiae commodi eos provident aspernatur? Debitis voluptate tempore mollitia error. Architecto, repellendus."
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

        <label> Salario</label>

        <p>{errors.Salario?.message}</p>
        <input
          placeholder="Qual o salario para a vaga"
          {...register("Salario")}
          defaultValue={500}
        />

        <p>{errors.Experiencia?.message}</p>
        <label>experiencia</label>
        <input
          value="junior"
          placeholder="Experiencia"
          {...register("Experiencia")}
        />

        <label>Quais tecnologias necessárias para a vaga?</label>

        <ul>
          {fields.map((Tecnologias, index) => (
            <li key={Tecnologias.id}>
              <input {...register(`Tecnologias.${index}.linguagem`)} required />
              <button onClick={(e) => removeTecnologia(e, index)}>x</button>
            </li>
          ))}
        </ul>

        <button onClick={addTecnologia}>Adicionar tecnologia</button>

        <input type="submit" />
      </form>
    </div>
  );
}
