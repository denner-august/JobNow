import styles from "../styles/login.module.scss";
import Image from "next/image";

export default function Login() {
  const TamanhoIcons = {
    width: 50,
    heigth: 50,
  };

  return (
    <div className={styles.Container}>
      <div className={styles.loginform} id={styles.Empregador}>
        <div className={styles.Titulo}>
          <p>Empresa</p>
        </div>
        <div className={styles.EntrarEmpresa}>
          <Image
            className={styles.Linkedin}
            src="/images/linkedin.png"
            alt="Picture of the author"
            width={TamanhoIcons.width}
            height={TamanhoIcons.width}
          />
        </div>
      </div>
      <div className={styles.loginform} id={styles.Programador}>
        <div className={styles.Titulo}>
          <p>Programador</p>
        </div>
        <div className={styles.EntrarProgramador}>
          <Image
            className={styles.Github}
            src="/images/github.png"
            alt="Picture of the author"
            width={TamanhoIcons.width}
            height={TamanhoIcons.width}
          />
        </div>
      </div>
    </div>
  );
}
