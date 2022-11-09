import Image from "next/future/image";

import styles from "../styles/user.module.scss";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";

import Jobs from "../jobs/jobs.json";
import { jobProps } from "./types/jobs";

export default function User() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      return;
    } else {
      Router.push("/");
    }
  }, [session]);

  function Logout() {
    if (session) {
      signOut();
      Router.push("/");
    }
    Router.push("/");
  }

  function PushInicio() {
    Router.push("/");
  }

  return (
    <div className={styles.Container}>
      <header className={styles.header}>
        <button className={styles.button} onClick={PushInicio}>
          Inicio
        </button>
        <p className={styles.titulo}>Job Now</p>
        <button className={styles.perfil} onClick={Logout}>
          <Image
            src="/images/github2.png"
            alt="imagem do usuario"
            width={25}
            height={25}
          />
          <p>{session?.user?.name}</p>
        </button>
      </header>

      <div className={styles.ContainerJob}>
        {Jobs.vagas.map((items: jobProps, index) => {
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
                <button>Ver Vaga</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
