import Image from "next/future/image";

import { jobContainerProps } from "../../../types/jobs";

import styles from "../../../styles/user.module.scss";

import Router from "next/router";

export function ExibiVaga({ job }: jobContainerProps) {
  function pushViewJob(id: number) {
    Router.push(`/ViewJob/${id}`);
  }

  return (
    <div className={styles.ContainerJob}>
      <div className={styles.layoutVagas} key={job.detalhes}>
        <div className={styles.titulo}>
          <Image
            src={job.logo}
            alt="imagem do usuario"
            width={200}
            height={200}
          />

          <p>Titulo: {job.titulo}</p>
        </div>

        <div className={styles.vagaDados}>
          <p> Experiencia: {job.experiencia}</p>
          <p> Salario: {job.salario}</p>
          <p> Modelo: {job.tipo}</p>
        </div>

        <ul>
          <p>Tecnologias </p>
          {job.tecnologias.map((tec, index) => {
            return <li key={index}>{tec}</li>;
          })}
        </ul>

        <div className={styles.buttonLayout}>
          <button onClick={() => pushViewJob(job.id)}>Ver Vaga</button>
        </div>
      </div>
    </div>
  );
}