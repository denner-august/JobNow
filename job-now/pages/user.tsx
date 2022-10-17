import Image from "next/image";
import styles from "../styles/user.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";

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
    </div>
  );
}
