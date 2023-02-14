import { useState, useContext } from "react";
import { api } from "../axios";

import Styles from "../styles/perfil.module.scss";
import styles from "../styles/user.module.scss";

import { ExibiVaga } from "../components/homePage/components/exibiVaga";
import { HeaderDefaul } from "../components/homePage/components/headerLogin";

import { Context } from "../context/userContext";

import { jobProps } from "../types/jobs";

import { Loading } from "../components/homePage/components/Loading";

import UseSWR from 'swr'

interface perfilProps extends jobProps {
  ref: { ["@ref"]: { id: number } };
}

export default function Perfil() {

  const { user } = useContext(Context);

  const [jobsUser, setJObsUser] = useState<any>([]);

  const request = (url: string) => api.post(url, {
    email: user?.email,
  }).then(response => setJObsUser(response.data))

  const { data, isLoading } = UseSWR("/api/allJobOneUser", request, {
    revalidateOnFocus: false,
    refreshInterval: 300000
  })

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

  if (isLoading) {
    return (
      <>
        <HeaderDefaul />
        <Loading />
      </>
    )
  }

  return (
    <div className={styles.Container}>
      <HeaderDefaul />

      {jobsUser.length === 0
        ? SemVaga()
        : MostraVagas()}
    </div>
  );
}
