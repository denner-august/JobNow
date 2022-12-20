import { useEffect } from "react";
import { api } from "../../axios";

import { HeaderDefaul } from "../../components/homePage/components/headerLogin";
import styles from "../../styles/Viewjob.module.scss";

import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Image from "next/image";

import { emailLinkGen } from "../../tools/EmailGen";
import { Context } from "../../context/userContext";

import { jobId } from "../../types/jobs";

export default function ViewJob() {
  const { candidaturaName, DeletarVaga, Deletar } = useContext(Context);

  const router = useRouter();
  const { job_id } = router.query;

  const [job, setJob] = useState<jobId>();

  useEffect(() => {
    async function apiFindJob() {
      const data: jobId = await api
        .post(`/job/${job_id}/`)
        .then((response) => response.data);

      setJob(data);
    }

    apiFindJob();

    return setJob({} as jobId);
  }, [job_id]);

  function RenderTecnlogias() {
    if (job?.Tecnologias) {
      return job.Tecnologias.map((tec, index) => {
        return <li key={index}>{String(tec)}</li>;
      });
    }
  }

  function ButtonEmail() {
    return (
      <button>
        <a
          href={`${emailLinkGen(`${job?.emailVaga}`, `${job?.TituloVaga}`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {candidaturaName}
        </a>
      </button>
    );
  }

  function ButtonDeletarVaga() {
    return (
      <button onClick={() => Deletar(Number(job_id))}>
        <a>{candidaturaName}</a>
      </button>
    );
  }

  if (!job?.emailVaga) {
    return <h1>Carregando</h1>;
  }

  return (
    <>
      <HeaderDefaul />
      <div className={styles.Container}>
        <div className={styles.logo}>
          {/* <Image src={`${job?.logo}`} height={150} width={150} /> */}
          <h1>FOTO</h1>
        </div>

        <h1>{job?.TituloVaga}</h1>

        <h2>{job?.Detalhes}</h2>

        <h3>Tecnologias</h3>
        <ul>{RenderTecnlogias()}</ul>

        <h4>Tipo de vaga</h4>
        <p className={styles.VagaTipo}>{job?.tipo}</p>

        <h5>Experiencia</h5>
        <p className={styles.experiencia}>{job?.Experiencia}</p>

        <h6>Salário</h6>
        <p className={styles.salario}>
          {job?.Salario
            ? job.Salario.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
            : 0}
        </p>

        {DeletarVaga === false ? ButtonEmail() : ButtonDeletarVaga()}
      </div>
    </>
  );
}
