import Image from "next/future/image";

import styles from "../../../styles/user.module.scss";

import Router from "next/router";
import { useContext } from "react";
import { Context } from "../../../context/userContext";
import { ExibiJobsProps } from "../../../types/jobs";

export function ExibiVaga({
  job,
  buttonNameVaga,
  deletarVaga,
}: ExibiJobsProps) {
  const { setCandidaturaName, setDeletarVaga } = useContext(Context);

  function pushViewJob(id: number) {
    setCandidaturaName(String(buttonNameVaga));
    setDeletarVaga(Boolean(deletarVaga));
    Router.push(`/ViewJob/${id}`);
  }

  function RenderTecnologias() {
    if (job.Tecnologias) {
      return job.Tecnologias.map((tec, index) => {
        return <li key={index}>{String(tec)}</li>;
      });
    }
  }

  return (
    <div className={styles.ContainerJob}>
      <div className={styles.layoutVagas} key={job.Detalhes}>
        <div className={styles.titulo}>
          {/* <Image
            priority={true}
            src={job.logo}
            alt="imagem do usuario"
            width={200}
            height={200}
          /> */}

          <p>Titulo: {job.TituloVaga}</p>
        </div>

        <div className={styles.vagaDados}>
          <p> Experiencia: {job.Experiencia}</p>
          <p> Salario: {job.Salario}</p>
          <p> Modelo: {job.tipo}</p>
        </div>

        <ul>
          <p>Tecnologias </p>

          {RenderTecnologias()}
        </ul>

        <div className={styles.buttonLayout}>
          <button onClick={() => pushViewJob(job.id)}>Ver Vaga</button>
        </div>
      </div>
    </div>
  );
}
