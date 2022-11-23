import { useContext, useEffect } from "react";
import Router from "next/router";
import styles from "../styles/user.module.scss";
import { Context } from "../context/userContext";

import Image from "next/future/image";

import Jobs from "../jobs/jobs.json";

import { jobProps } from "../types/jobs";
import { HeaderDefaul } from "../components/homePage/components/headerLogin/index";

export default function User() {
  const { user } = useContext(Context);

  console.log(Jobs.vagas);

  useEffect(() => {
    if (user) {
      return;
    } else {
      Router.push("/");
    }
  }, [user]);

  function pushViewJob(id: number) {
    Router.push(`/ViewJob/${id}`);
  }

  return (
    <div className={styles.Container}>
      <HeaderDefaul />

      <div className={styles.ContainerJob}>
        {Jobs.vagas.map((items: jobProps) => {
          return (
            <div className={styles.layoutVagas} key={items.detalhes}>
              <div className={styles.titulo}>
                <Image
                  src={items.logo}
                  alt="imagem do usuario"
                  width={200}
                  height={200}
                />

                <p>Titulo: {items.titulo}</p>
              </div>

              <div className={styles.vagaDados}>
                <p> Experiencia: {items.experiencia}</p>
                <p> Salario: {items.salario}</p>
                <p> Modelo: {items.tipo}</p>
              </div>

              <ul>
                <p>Tecnologias </p>
                {items.tecnologias.map((tec, index) => {
                  return <li key={index}>{tec}</li>;
                })}
              </ul>

              <div className={styles.buttonLayout}>
                <button onClick={() => pushViewJob(items.id)}>Ver Vaga</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
