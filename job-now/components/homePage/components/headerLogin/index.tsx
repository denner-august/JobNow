import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../../../context/userContext";

import styles from "./headerDefault.module.scss";

import Router from "next/router";
import { signOut } from "next-auth/react";
import Link from "next/link";

export function HeaderDefaul() {
  const { user } = useContext(Context);

  function Logout() {
    if (user) {
      signOut();
      Router.push("/");
    }
    Router.push("/");
  }

  function PushInicio() {
    Router.push("/user");
  }

  return (
    <div className={styles.Container}>
      <header className={styles.header}>
        <button className={styles.button} onClick={PushInicio}>
          Inicio
        </button>

        <Link href="/CreateJob">
          <button className={styles.button}>criar vaga</button>
        </Link>

        <Link href="/perfil">
          <button className={styles.button}>Perfil</button>
        </Link>

        <button className={styles.perfil} onClick={Logout}>
          <Image
            src="/images/github2.png"
            alt="imagem do usuario"
            width={25}
            height={25}
          />
          <p>{user?.name}</p>
        </button>
      </header>
    </div>
  );
}
