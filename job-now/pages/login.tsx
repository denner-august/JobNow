import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import styles from "../styles/login.module.scss";

import { useRouter } from "next/router";
import { LoginButton } from "../tools/LoginButton";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  const linkedinImage = "/images/linkedin.png";
  const githubImage = "/images/github.png";

  const TamanhoIcons = {
    width: 50,
    heigth: 50,
  };

  // useEffect(() => {
  //   if (session) {
  //     router.push("user");
  //   }
  // }, [router, session]);

  useEffect(() => {
    console.log(session);
  }, [session]);

  function Logar() {
    if (session) {
      signOut();
    }
    signIn();
  }

  return (
    <div className={styles.Container}>
      <div className={styles.loginform} id={styles.Empregador}>
        <div className={styles.Titulo}>
          <p>Empresa</p>
        </div>
      </div>
      <div className={styles.loginform} id={styles.Programador}>
        <div className={styles.Titulo}>
          <p>Programador</p>
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

      {/* <div className={styles.loginform} id={styles.Empregador}>
        <div className={styles.Titulo}>
          <p>Empresa</p>
        </div>
        <button className={styles.EntrarEmpresa}>
          <LoginButton
            className={styles.Linkedin}
            src="/images/linkedin.png"
            alt="Picture of the author"
            width={TamanhoIcons.width}
            height={TamanhoIcons.width}
          />
        </button>
      </div>
      <div className={styles.loginform} id={styles.Programador}>
        <div className={styles.Titulo}>
          <p>Programador</p>
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
      </div> */}
    </div>
  );
}
