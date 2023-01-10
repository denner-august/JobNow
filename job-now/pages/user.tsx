import { useEffect, useState } from "react";
import Router from "next/router";

import styles from "../styles/user.module.scss";

import { HeaderDefaul } from "../components/homePage/components/headerLogin/index";
import { ExibiVaga } from "../components/homePage/components/exibiVaga";

import { useSession } from "next-auth/react";
import { CreateJobFormProps } from "../types/createJobForm";

import { Createjob } from "../requests/createJob";
import { api } from "../axios";

interface exibiProps {
  data: CreateJobFormProps;
  ref: { "@ref": { id: number } };
}

export default function User() {
  const { data: Session, status } = useSession();

  const [Jobs, setJobs] = useState<exibiProps[]>([]);

  useEffect(() => {
    async function Getjobs() {
      const jobs = await api.get("/api/jobs").then((response) => response.data);

      const data = jobs.data.map((item: any) => item);

      setJobs(data);
    }

    Getjobs();

    return setJobs([]);
  }, [status, Createjob]);

  if (status === "loading") {
    return <h1>Carregando</h1>;
  }

  if (status === "unauthenticated") {
    Router.push("/login");
  }

  if (Jobs.length === 0) {
    return <h1>Carregando</h1>;
  }

  return (
    <div className={styles.Container}>
      <HeaderDefaul />

      {Jobs.map((items) => {
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
