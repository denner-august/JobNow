import { useEffect, useState } from "react";
import Router from "next/router";

import styles from "../styles/user.module.scss";

import { HeaderDefaul } from "../components/homePage/components/headerLogin/index";
import { ExibiVaga } from "../components/homePage/components/exibiVaga";

import { useSession } from "next-auth/react";
import { CreateJobFormProps } from "../types/createJobForm";

import { GetAllJobs } from "../requests/jobs";
import { CreateJob } from "../requests/methods";
import { getAllJobOneUser } from "../requests/allJobOneUser";

export default function User() {
  const { data: Session, status } = useSession();

  const [Jobs, setJobs] = useState<CreateJobFormProps[]>([]);

  useEffect(() => {
    async function Getjobs() {
      const jobs = await GetAllJobs().then((response) => response.data);

      const data = jobs.map((item) => item.data);

      setJobs(data);
    }

    Getjobs();

    return setJobs([]);
  }, [status, CreateJob]);

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
