import { useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";

import styles from "../styles/user.module.scss";

import { HeaderDefaul } from "../components/homePage/components/headerLogin/index";
import { ExibiVaga } from "../components/homePage/components/exibiVaga";

import { jobProps } from "../types/jobs";
import { useSession } from "next-auth/react";
import { getJobs } from "../requests/methods";
import { CreateJobFormProps } from "../types/createJobForm";
import { api } from "../axios";

export default function User() {
  const { data: Session, status } = useSession();

  const [Jobs, setJobs] = useState<CreateJobFormProps[]>([]);

  useEffect(() => {
    async function allJobs() {
      const data = await getJobs();

      setJobs(data.vagas);
    }

    allJobs();

    return setJobs([]);
  }, [status]);

  useEffect(() => {
    if (status === "authenticated") {
      token();
    }
  }, [status]);

  async function token() {
    const token = await api
      .post("/sign", {
        email: Session?.user?.email,
        name: Session?.user?.name,
      })
      .then((response) => response.data);

    api.defaults.headers["authorization"] = `${token}`;
  }

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
