import { useEffect, useState, useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import styles from "../styles/login.module.scss";

import { useRouter } from "next/router";
import { LoginButton } from "../tools/LoginButton";
import Image from "next/image";
import { Context } from "../context/userContext";

export default function Login() {
  const { user } = useContext(Context);
  const { data: session } = useSession();
  const router = useRouter();

  const TamanhoIcons = {
    width: 50,
    heigth: 50,
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      return localStorage.setItem("usr", JSON.stringify(user));
    }
  }, [user, session]);

  useEffect(() => {
    async function VerifyLogin() {
      const user = localStorage.getItem("usr");
      if (user && session) {
        router.push("user");
        setLoading(false);
      }
      setLoading(false);
    }

    VerifyLogin();
  }, [router, user, session]);

  async function Logar() {
    if (user) {
      await signOut();
    }

    signIn();
  }

  if (loading === true) {
    return <h1>carregando</h1>;
  }

  return (
    <div className={styles.Container}>
      <div className={styles.loginform} id={styles.Empregador}>
        <div className={styles.Titulo}>
          <Image
            alt="imagem de uma empresa"
            src={"/images/Empregador.jpg"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.loginform} id={styles.Programador}>
        <div className={styles.Titulo}>
          <Image
            alt="imagem de um programador"
            src={"/images/programador.jpg"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <button className={styles.EntrarProgramador} onClick={Logar}>
        <LoginButton
          className={styles.Github}
          src="/images/github.png"
          alt="Picture of the author"
          width={TamanhoIcons.width}
          height={TamanhoIcons.width}
        />
      </button>
    </div>
  );
}
