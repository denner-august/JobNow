import { api } from "../../axios";

import { HeaderDefaul } from "../../components/homePage/components/headerLogin";
import styles from "../../styles/Viewjob.module.scss";

import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Image from "next/image";

import { emailLinkGen } from "../../tools/EmailGen";
import { Context } from "../../context/userContext";

import { jobId } from "../../types/jobs";

import { useQuery } from 'react-query'

interface viewJobProps {
  resposta: { data: jobId };
}

export default function ViewJob() {
  const { candidaturaName, DeletarVaga, Deletar } = useContext(Context);

  const router = useRouter();
  const { job_id } = router.query;

  const { data, isLoading } = useQuery("oneJobInformation", async () => {
    const request: viewJobProps = await api
      .post(`api/oneJobInformation/${job_id}`)
      .then((response) => response.data);

    return request.resposta.data
  })




  function RenderTecnlogias() {
    if (data?.Tecnologias) {
      return data.Tecnologias.map((tec, index) => {
        return <li key={index}>{String(tec)}</li>;
      });
    }
  }

  function ButtonEmail() {
    return (
      <button>
        <a
          href={`${emailLinkGen(`${data?.emailVaga}`, `${data?.TituloVaga}`)}`}
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
      <button onClick={() => Deletar(job_id)}>
        <a>{candidaturaName}</a>
      </button>
    );
  }

  if (isLoading) {
    return <h1>Carregando dados...</h1>
  }

  if (!data?.emailVaga) {
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

        <h1>{data?.TituloVaga}</h1>

        <h2>{data?.Detalhes}</h2>

        <h3>Tecnologias</h3>
        <ul>{RenderTecnlogias()}</ul>

        <h4>Tipo de vaga</h4>
        <p className={styles.VagaTipo}>{data?.tipo}</p>

        <h5>Experiencia</h5>
        <p className={styles.experiencia}>{data?.Experiencia}</p>

        <h6>Salário</h6>
        <p className={styles.salario}>
          {data?.Salario
            ? data.Salario.toLocaleString("pt-br", {
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
