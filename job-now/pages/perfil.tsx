import { useState, useContext, useEffect } from "react";
import { ExibiVaga } from "../components/homePage/components/exibiVaga";
import { HeaderDefaul } from "../components/homePage/components/headerLogin";

import Styles from "../styles/perfil.module.scss";

import styles from "../styles/user.module.scss";

import { jobProps } from "../types/jobs";
import Jobs from "../jobs/jobs.json";
import { useSession } from "next-auth/react";
import { Context } from "../context/userContext";

export default function Perfil() {
  const { user } = useContext(Context);
  const { status } = useSession();

  const [jobsUser, setJObsUser] = useState<jobProps[]>([]);

  useEffect(() => {
    if (status === "authenticated") {
      const VerifyJobs = Jobs.vagas.filter((item) => item.Email === user.email);

      setJObsUser(VerifyJobs);
    }
  }, [user]);

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

  if (status === "loading") {
    return <h1>Carregando</h1>;
  }

  return (
    <div className={styles.Container}>
      <HeaderDefaul />

      {jobsUser.length > 0 ? MostraVagas() : SemVaga()}
    </div>
  );
}
