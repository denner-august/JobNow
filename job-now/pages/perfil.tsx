import { useState, useContext, useEffect } from "react";
import { api } from "../axios";

import Styles from "../styles/perfil.module.scss";
import styles from "../styles/user.module.scss";

import { ExibiVaga } from "../components/homePage/components/exibiVaga";
import { HeaderDefaul } from "../components/homePage/components/headerLogin";

import { Context } from "../context/userContext";

import { jobProps } from "../types/jobs";

import { useSession } from "next-auth/react";

interface perfilProps extends jobProps {
  ref: { ["@ref"]: { id: number } };
}

export default function Perfil() {
  const { user } = useContext(Context);
  const { status } = useSession();

  const [jobsUser, setJObsUser] = useState<any>([]);

  async function getJobUser() {
    const data = await api
      .post("/api/allJobOneUser", {
        email: user?.email,
      })
      .then((response) => response.data);
    setJObsUser(data);
    return;
  }

  useEffect(() => {
    if (status === "authenticated") {
      getJobUser();
    }
    return setJObsUser([]);
  }, [status, user]);

  function MostraVagas() {
    return jobsUser.map((items: perfilProps) => {
      return (
        <ExibiVaga
          idVaga={items.ref["@ref"].id}
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
