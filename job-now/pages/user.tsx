import { useEffect, useState } from "react";
import Router from "next/router";

import styles from "../styles/user.module.scss";

import { HeaderDefaul } from "../components/homePage/components/headerLogin/index";
import { ExibiVaga } from "../components/homePage/components/exibiVaga";

import { useSession } from "next-auth/react";
import { CreateJobFormProps } from "../types/createJobForm";

import { api } from "../axios";
import { useQuery } from 'react-query'


interface exibiProps {
  data: CreateJobFormProps;
  ref: { "@ref": { id: number } };
}

export default function User() {
  const { data: Session, status } = useSession();

  const { data, isLoading } = useQuery("allJobs", async () => {
    const jobs = await api.get("/api/jobs").then((response) => response.data);
    const itens = jobs.data.map((item: any) => item);
    return itens
  },)

  if (status === "unauthenticated") {
    Router.push("/login");
  }

  if (isLoading) {
    return <h1>Carregando dados</h1>
  }

  if (data.length === 0) {
    return (
      <>
        <HeaderDefaul />
        <h1>Ainda não temos trabalhos adicionados</h1>
      </>
    );
  }

  return (
    <div className={styles.Container}>
      <HeaderDefaul />

      {data.map((items: exibiProps) => {
        return (
          <ExibiVaga
            idVaga={items.ref["@ref"].id}
            key={Math.random()}
            job={items.data}
            buttonNameVaga="Candidatar"
          />
        );
      })}
    </div>
  );
}
