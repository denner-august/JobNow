import { useContext, useEffect } from "react";
import Router from "next/router";
import { Context } from "../context/userContext";

import styles from "../styles/user.module.scss";

import { HeaderDefaul } from "../components/homePage/components/headerLogin/index";
import { ExibiVaga } from "../components/homePage/components/exibiVaga";

import Jobs from "../jobs/jobs.json";
import { jobProps } from "../types/jobs";

export default function User() {
  const { user } = useContext(Context);

  useEffect(() => {
    if (user) {
      return;
    } else {
      Router.push("/");
    }
  }, [user]);

  return (
    <div className={styles.Container}>
      <HeaderDefaul />

      {Jobs.vagas.map((items: jobProps) => {
        return <ExibiVaga key={Math.random()} job={items} />;
      })}
    </div>
  );
}
