import { HeaderDefaul } from "../../components/homePage/components/headerLogin";
import styles from "../../styles/Viewjob.module.scss";
import jobs from "../../jobs/jobs.json";

import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

export default function ViewJob() {
  const router = useRouter();
  const { job_id } = router.query;

  const [job, setJob] = useState(() => {
    const findjob = jobs.vagas.find((jobs) => jobs.id === Number(job_id));
    return findjob;
  });

  function RenderTecnlogias() {
    return job?.tecnologias.map((tec, index) => {
      return <li key={index}>{tec}</li>;
    });
  }

  return (
    <>
      <HeaderDefaul />
      <div className={styles.Container}>
        <div className={styles.logo}>
          <Image src={`${job?.logo}`} height={150} width={150} />
        </div>

        <h1>{job?.titulo}</h1>

        <h2>{job?.detalhes}</h2>

        <h3>Tecnologias</h3>
        <ul>{RenderTecnlogias()}</ul>

        <h4>Tipo de vaga</h4>
        <p className={styles.VagaTipo}>{job?.tipo}</p>

        <h5>Experiencia</h5>
        <p className={styles.experiencia}>{job?.experiencia}</p>

        <h6>Salário</h6>
        <p className={styles.salario}>
          {job?.salario.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <button>Candidatar</button>
      </div>
    </>
  );
}
