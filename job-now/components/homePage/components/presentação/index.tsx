import styles from "./styles.module.scss";
import Typewriter from "typewriter-effect";

export function Apresentacao() {
  return (
    <div className={styles.Container}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1000)
            .deleteAll()
            .typeString("  <h1>Dev Junior carregando...</h1>")
            .typeString("há Vagas Para você")
            .start();
        }}
      />
    </div>
  );
}
