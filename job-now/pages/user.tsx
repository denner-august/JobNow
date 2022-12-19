import { useEffect, useState } from "react";
import Router from "next/router";

import styles from "../styles/user.module.scss";

import { HeaderDefaul } from "../components/homePage/components/headerLogin/index";
import { ExibiVaga } from "../components/homePage/components/exibiVaga";

import { jobProps } from "../types/jobs";
import { useSession } from "next-auth/react";
import { getJobs } from "../requests/methods";
import { CreateJobFormProps } from "../types/createJobForm";

export default function User() {
  const { status } = useSession();

  if (status === "loading") {
    return <h1>Carregando</h1>;
  }

  if (status === "unauthenticated") {
    Router.push("/login");
  }
  const [Jobs, setJobs] = useState<CreateJobFormProps[]>([]);

  useEffect(() => {
    async function allJobs() {
      const data = await getJobs();

      setJobs(data.vagas);
    }

    allJobs();

    return setJobs([]);
  }, [status]);

  if (Jobs.length === 0) {
    return <h1>Carregando</h1>;
  }

  return (
    <div className={styles.Container}>
      <HeaderDefaul />

      {Jobs.map((items: CreateJobFormProps) => {
        return (
          <ExibiVaga
            key={Math.random()}
            job={items}
            buttonNameVaga="Candidatar"
          />
        );
      })}
    </div>
  );
}
