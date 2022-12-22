import { useState, useContext, useEffect } from "react";
import { api } from "../axios";

import Styles from "../styles/perfil.module.scss";
import styles from "../styles/user.module.scss";

import { ExibiVaga } from "../components/homePage/components/exibiVaga";
import { HeaderDefaul } from "../components/homePage/components/headerLogin";

import { Context } from "../context/userContext";

import { jobProps } from "../types/jobs";
import { jobId } from "../types/jobs";

import { useSession } from "next-auth/react";

export default function Perfil() {
  const { user } = useContext(Context);
  const { status } = useSession();

  const [jobsUser, setJObsUser] = useState<any>([]);

  useEffect(() => {
    if (status === "authenticated") {
      getJobUser();
    }

    async function getJobUser() {
      const data = await api
        .post("/job/all/user", {
          email: "denner.augusto90@gmail.com",
        })
        .then((response) => response.data);

      setJObsUser(data);
    }

    return setJObsUser([]);
  }, [status, user]);

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

      {jobsUser.length === 0 || jobsUser === "você não criou nenhuma vaga"
        ? SemVaga()
        : MostraVagas()}
    </div>
  );
}
