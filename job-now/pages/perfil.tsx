import { useState } from "react";
import { ExibiVaga } from "../components/homePage/components/exibiVaga";
import { HeaderDefaul } from "../components/homePage/components/headerLogin";

import Styles from "../styles/perfil.module.scss";

import styles from "../styles/user.module.scss";

import { jobProps } from "../types/jobs";
import Jobs from "../jobs/jobs.json";

export default function Perfil() {
  const [jobsUser, setJObsUser] = useState(() => {
    return Jobs.vagas.filter((item) => item.id === 1);
  });

  function MostraVagas() {
    return jobsUser.map((items: jobProps) => {
      return (
        <ExibiVaga
          key={Math.random()}
          job={items}
          buttonNameVaga="Deletar"
          deletarVaga={true}
        />
      );
    });
  }

  function SemVaga() {
    return (
      <div className={Styles.Container}>
        <p>Você não criou nenhuma vaga</p>
      </div>
    );
  }

  return (
    <div className={styles.Container}>
      <HeaderDefaul />

      {jobsUser.length > 0 ? MostraVagas() : SemVaga()}
    </div>
  );
}
